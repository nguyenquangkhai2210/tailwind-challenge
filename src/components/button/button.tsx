import classnames from "classnames";
import { ButtonProps } from "./type";

export const Button = ({
  fontSize = "semibold",
  bgColor = "white",
  className,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={classnames(
        `bg-${bgColor} text-base shadow-md`,
        {
          "font-semibold": fontSize === "semibold",
          "font-bold": fontSize === "bold",
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
