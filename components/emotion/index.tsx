import { useState } from "react";

type Props = {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
};

const Emotion = ({ children, selected, onClick }: Props) => {
  const [isSelected, setIsSelected] = useState(selected);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onClick();
  };

  const selectedClass = isSelected ? "bg-neutral" : "";

  return (
    <div
      className={`border text-3xl p-2 m-2 rounded-md cursor-pointer ${selectedClass}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Emotion;
