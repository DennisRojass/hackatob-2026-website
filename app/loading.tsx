export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[40vh] max-w-6xl items-center justify-center px-4 py-24">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-10 w-10 animate-spin rounded-full border-2 border-cyan/30 border-t-cyan"
          aria-hidden
        />
        <p className="text-sm text-muted">Cargando HackaToB…</p>
      </div>
    </div>
  );
}
