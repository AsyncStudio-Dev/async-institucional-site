type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  titleAs?: "h1" | "h2";
  className?: string;
};

export function SectionTitle({ eyebrow, title, description, titleAs = "h2", className = "mb-10" }: SectionTitleProps) {
  const TitleTag = titleAs;

  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-async-frost-dark">
          {eyebrow}
        </p>
      ) : null}
      <TitleTag className="text-3xl font-semibold text-async-ink md:text-4xl">{title}</TitleTag>
      {description ? <p className="mt-4 text-base leading-7 text-async-graphite">{description}</p> : null}
    </div>
  );
}
