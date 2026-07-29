"use client";

import { useActionState } from "react";
import Link from "next/link";
import { submitInterest, type InterestState } from "@/app/postular/actions";
import { tracks } from "@/lib/content/site";

const initial: InterestState = { ok: false, message: "" };

export function InterestForm() {
  const [state, action, pending] = useActionState(submitInterest, initial);

  if (state.ok) {
    return (
      <div className="card-gradient p-6 md:p-8" role="status" aria-live="polite">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-spark">
          Interés registrado
        </p>
        <h2 className="font-display mt-3 text-2xl font-semibold text-white">
          Gracias por sumarte
        </h2>
        <p className="mt-3 text-sm text-muted">{state.message}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/#tracks"
            className="text-sm font-semibold text-cyan hover:underline"
          >
            Explorar tracks →
          </Link>
          <Link href="/" className="text-sm text-muted hover:text-white">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form action={action} className="card-gradient space-y-5 p-6 md:p-8" noValidate>
      <div>
        <h2 className="font-display text-xl font-semibold text-white">
          Lista de interés
        </h2>
        <p className="mt-2 text-sm text-muted">
          El formulario oficial se activará después. Dejar tus datos no garantiza
          un cupo.
        </p>
      </div>

      <Field
        label="Nombre completo"
        name="name"
        error={state.errors?.name}
        required
      >
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={Boolean(state.errors?.name)}
          className="field-input"
        />
      </Field>

      <Field label="Correo" name="email" error={state.errors?.email} required>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(state.errors?.email)}
          className="field-input"
        />
      </Field>

      <Field
        label="Track de interés"
        name="track"
        error={state.errors?.track}
        required
      >
        <select
          id="track"
          name="track"
          required
          defaultValue=""
          aria-invalid={Boolean(state.errors?.track)}
          className="field-input"
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {tracks.map((t) => (
            <option key={t.slug} value={t.name}>
              {t.name}
            </option>
          ))}
          <option value="Aún no sé">Aún no sé</option>
        </select>
      </Field>

      <Field
        label="Perfil principal"
        name="profile"
        error={state.errors?.profile}
        required
      >
        <select
          id="profile"
          name="profile"
          required
          defaultValue=""
          aria-invalid={Boolean(state.errors?.profile)}
          className="field-input"
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option value="Tecnología">Tecnología</option>
          <option value="Producto">Producto</option>
          <option value="Negocio">Negocio</option>
          <option value="Otro">Otro</option>
        </select>
      </Field>

      <Field label="Mensaje (opcional)" name="message" error={state.errors?.message}>
        <textarea
          id="message"
          name="message"
          rows={3}
          maxLength={800}
          className="field-input resize-y"
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm text-muted">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 h-4 w-4 rounded border-line"
            aria-invalid={Boolean(state.errors?.consent)}
          />
          <span>
            Acepto la{" "}
            <Link href="/legal/privacidad" className="text-cyan hover:underline">
              política de privacidad
            </Link>{" "}
            provisional y el tratamiento de mis datos para la convocatoria
            HackaToB 2026.
          </span>
        </label>
        {state.errors?.consent && (
          <p className="mt-1 text-xs text-spark">{state.errors.consent}</p>
        )}
      </div>

      {state.message && !state.ok && (
        <p className="text-sm text-spark" role="alert">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn-shine inline-flex w-full items-center justify-center rounded-full bg-spark px-7 py-3.5 text-sm font-semibold text-[#151000] transition hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Enviando…" : "Enviar interés"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  required,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-white">
        {label}
        {required ? <span className="text-spark"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1 text-xs text-spark" id={`${name}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
