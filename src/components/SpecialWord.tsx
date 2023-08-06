export type SpecialWordProps = { text: string; className?: string };

export const SpecialWord = ({ text, className }: SpecialWordProps) => {
  return (
    <span className={`flex flex-row grow border-b-4 ${className}`}>
      {text.split("").map((char, index) => {
        return (
          <p key={`${char}-${index}`} className="mx-auto">
            {char}
          </p>
        );
      })}
    </span>
  );
};
