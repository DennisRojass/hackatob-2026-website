"use client";

export function NodeNetwork() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-30"
      aria-hidden
    >
      <svg
        className="hidden h-full w-full md:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5ce1ff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#5ce1ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[
          [12, 22],
          [28, 48],
          [44, 18],
          [58, 62],
          [72, 30],
          [86, 55],
          [20, 72],
          [50, 80],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="0.55" fill="url(#nodeGlow)" />
        ))}
        <line x1="12" y1="22" x2="28" y2="48" stroke="rgba(92,225,255,0.12)" strokeWidth="0.12" />
        <line x1="28" y1="48" x2="44" y2="18" stroke="rgba(92,225,255,0.1)" strokeWidth="0.12" />
        <line x1="44" y1="18" x2="72" y2="30" stroke="rgba(92,225,255,0.1)" strokeWidth="0.12" />
        <line x1="58" y1="62" x2="86" y2="55" stroke="rgba(92,225,255,0.1)" strokeWidth="0.12" />
        <line x1="20" y1="72" x2="50" y2="80" stroke="rgba(92,225,255,0.1)" strokeWidth="0.12" />
      </svg>
    </div>
  );
}
