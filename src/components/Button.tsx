"use client";

const Button: React.FC<{ label: string; click: () => void }> = ({
  label,
  click,
}) => {
  return (
    <button type="button" onClick={click} className="primary">
      {label}
    </button>
  );
};

export default Button;
