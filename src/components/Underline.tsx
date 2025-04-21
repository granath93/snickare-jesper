const Underline: React.FC<{
  children: React.ReactNode;
  variant?: "default" | "small";
  hidden?: boolean;
}> = ({ variant, hidden, children }) => {
  if (hidden) return children;

  return (
    <span className="relative w-fit">
      <span
        className={`after:block after:absolute after:top-full after:mt-1 after:h-[2px] after:w-full after:bg-accent ${
          variant === "small" ? "after:-left-3" : "after:-left-7"
        }`}
      >
        {children}
      </span>
    </span>
  );
};

export default Underline;
