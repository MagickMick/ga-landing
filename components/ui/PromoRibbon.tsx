/**
 * Corner ribbon for mobile — classic diagonal banner in the top-right corner.
 * The parent element must have `relative overflow-hidden` for clipping to work.
 */
export function PromoRibbon({
  kicker,
  label,
}: {
  kicker: string;
  label: string;
}) {
  return (
    <div
      aria-hidden
      className="absolute -right-10 top-7 w-44 rotate-45 bg-sticker px-6 py-2 text-center shadow-lg"
    >
      <span className="block text-sm font-extrabold leading-none text-white drop-shadow-sm">
        {kicker}
      </span>
      <span className="block text-[10px] font-bold uppercase leading-tight text-white drop-shadow-sm">
        {label}
      </span>
    </div>
  );
}
