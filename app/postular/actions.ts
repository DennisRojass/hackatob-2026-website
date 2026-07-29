"use server";

import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

const interestSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre completo").max(120),
  email: z.string().trim().email("Correo inválido").max(160),
  track: z.enum([
    "HealthTrack",
    "GreenTrack",
    "FinTrack",
    "The Next Big Thing",
    "Aún no sé",
  ]),
  profile: z.enum(["Tecnología", "Producto", "Negocio", "Otro"]),
  message: z.string().trim().max(800).optional(),
  consent: z
    .string()
    .refine((v) => v === "on", {
      message: "Debes aceptar la política de privacidad",
    }),
});

export type InterestState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function submitInterest(
  _prev: InterestState,
  formData: FormData,
): Promise<InterestState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    track: String(formData.get("track") ?? ""),
    profile: String(formData.get("profile") ?? ""),
    message: String(formData.get("message") ?? ""),
    consent: formData.get("consent") === "on" ? "on" : "",
  };

  const parsed = interestSchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!errors[key]) errors[key] = issue.message;
    }
    return {
      ok: false,
      message: "Revisa los campos marcados.",
      errors,
    };
  }

  const record = {
    ...parsed.data,
    at: new Date().toISOString(),
    source: "interest-form",
  };

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "interest-leads.jsonl"),
      `${JSON.stringify(record)}\n`,
      "utf8",
    );
  } catch (err) {
    console.error("[HackaToB interest] persist failed", err);
  }

  console.info("[HackaToB interest]", record);

  return {
    ok: true,
    message:
      "Recibimos tu interés. Te contactaremos cuando abra el formulario oficial. Esto no garantiza un cupo.",
  };
}
