interface SectionNumberProps {
  number: string;
  label: string;
}

const SectionNumber = ({ number, label }: SectionNumberProps) => {
  return (
    <p className="section-number">
      {number} <span>{label}</span> →
    </p>
  );
};

export default SectionNumber;
