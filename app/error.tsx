"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-start justify-center px-4 py-20">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-spark">
        Error
      </p>
      <h1 className="font-display mt-4 text-3xl font-bold text-white">
        Algo salió mal
      </h1>
      <p className="mt-3 text-sm text-muted">
        {error.message || "Ocurrió un error inesperado. Intenta de nuevo."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-full bg-spark px-6 py-3 text-sm font-semibold text-[#151000]"
      >
        Reintentar
      </button>
    </div>
  );
}
