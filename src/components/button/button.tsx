import classnames from "classnames";
import { ButtonProps } from "./type";

export const Button = ({
  fontSize = "semibold",
  className,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={classnames(
        `bg-white text-base shadow-md`,
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
