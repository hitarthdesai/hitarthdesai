export type SpecialWordProps = { text: string; className?: string };

export const SpecialWord = ({ text, className }: SpecialWordProps) => {
  return (
    <>
      {text.split("").map((char, index) => {
        return (
          <p key={`${char}-${index}`} className={className}>
            {char}
          </p>
        );
      })}
    </>
  );
};
