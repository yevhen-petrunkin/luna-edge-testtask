interface IButtonProps {
  text: string;
  type?: "button" | "submit" | undefined;
  variant?: "primary" | "text" | undefined;
  size?: "base" | "lg" | undefined;
  decorated?: boolean | undefined;
  disabled?: boolean | undefined;
  clickHandler?: () => void;
  className?: string | undefined;
}

export default IButtonProps;
