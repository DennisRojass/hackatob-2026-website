export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-site" />
      <div className="absolute inset-0 bg-grid opacity-90" />
      <div className="absolute inset-0 bg-noise" />
      <div className="aurora opacity-70" />
      <div
        className="absolute -left-32 top-[28%] h-80 w-80 rounded-full blur-3xl"
        style={{ background: "rgba(61,124,255,0.14)" }}
      />
      <div
        className="absolute -right-20 top-8 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "rgba(92,225,255,0.12)" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "rgba(139,92,246,0.1)" }}
      />
    </div>
  );
}
