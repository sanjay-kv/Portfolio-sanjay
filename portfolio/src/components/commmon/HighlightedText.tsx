type HighlightedTextProps = {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
};

const HighlightedText = ({ text, className, tag = 'h3' }: HighlightedTextProps) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`text-xl font-bold inline bg-[#2878F2] py-1 ${className}`}>
      {text}
    </Tag>
  );
};

export default HighlightedText;
