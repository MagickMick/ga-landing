// Scalloped "seal" badge shape: a base circle plus 14 overlapping bump
// circles around its edge, all the same fill — the classic way to draw a
// wavy/scalloped coin-like outline without a hand-written clip-path.
// Generated for a 100x100 viewBox: bump centers sit on radius 36, bump
// radius 11.5, base circle radius 34 (comfortably overlapping the bumps'
// inner edge at 36-11.5=24.5, so there are no gaps in the "valleys").
const BUMP_CENTERS: [number, number][] = [
  [86.0, 50.0],
  [82.43, 65.62],
  [72.45, 78.15],
  [58.01, 85.1],
  [41.99, 85.1],
  [27.55, 78.15],
  [17.57, 65.62],
  [14.0, 50.0],
  [17.57, 34.38],
  [27.55, 21.85],
  [41.99, 14.9],
  [58.01, 14.9],
  [72.45, 21.85],
  [82.43, 34.38],
];
const BUMP_RADIUS = 11.5;

export function PromoSticker({
  kicker,
  label,
  className = "",
}: {
  kicker: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-sticker drop-shadow-lg"
      >
        <g fill="currentColor">
          <circle cx="50" cy="50" r="34" />
          {BUMP_CENTERS.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={BUMP_RADIUS} />
          ))}
        </g>
      </svg>
      {/* Text is width-capped with a fixed inset (not just padded within
          the box) — the visible shape is a circle, so a wide line near the
          top or bottom of the text stack would poke past the border even
          with plenty of box padding. A fixed pixel inset keeps every line
          safely clear of the edge, regardless of how close to the top/
          bottom it sits. */}
      <div className="relative flex h-full w-full items-center justify-center text-center">
        <div className="flex w-[calc(100%-40px)] flex-col items-center gap-1">
          <span className="text-base font-extrabold leading-none whitespace-nowrap text-white sm:text-lg">
            {kicker}
          </span>
          <span className="text-[8px] font-semibold uppercase leading-tight text-white sm:text-[9px]">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
