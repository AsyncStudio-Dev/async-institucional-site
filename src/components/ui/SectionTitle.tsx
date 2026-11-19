type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  titleAs?: "h1" | "h2";
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  titleAs = "h2",
  align = "center",
  tone = "light",
  className = "mb-10",
}: SectionTitleProps) {
  const TitleTag = titleAs;
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  const titleWeight = titleAs === "h1" ? "font-bold" : "font-semibold";
  const titleColor = tone === "dark" ? "text-mint-white" : "text-text-primary";
  const descriptionColor = tone === "dark" ? "text-mint-white/70" : "text-text-secondary";
  const eyebrowColor = tone === "dark" ? "text-async-green" : "text-[#15803d]";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow ? <p className={`eyebrow mb-3 ${eyebrowColor}`}>{eyebrow}</p> : null}
      <TitleTag className={`font-display text-3xl leading-[1.15] md:text-4xl ${titleWeight} ${titleColor}`}>
        {title}
      </TitleTag>
      {description ? <p className={`mt-4 text-base leading-7 ${descriptionColor}`}>{description}</p> : null}
    </div>
  );
}
