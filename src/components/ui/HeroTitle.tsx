type HeroTitleProps = {
  text: string;
  className?: string;
};

/**
 * Título do hero com entrada palavra a palavra. A animação fica pausada
 * enquanto a introdução (splash) está ativa — ver `.hero-word` em globals.css.
 * O texto completo segue em aria-label para leitores de tela.
 */
export function HeroTitle({ text, className = "" }: HeroTitleProps) {
  const words = text.split(" ");

  return (
    <h1 className={className} aria-label={text}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} aria-hidden="true">
          <span className="hero-word" style={{ animationDelay: `${index * 55}ms` }}>
            {word}
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </h1>
  );
}
