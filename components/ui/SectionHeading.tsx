export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClasses}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
