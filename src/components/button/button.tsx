import classnames from "classnames";
import { IconLoading } from "../icons";
import { ButtonProps } from "./type";

export const Button = ({
  fontSize = "semibold",
  loading,
  className,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={classnames(
        `bg-white flex justify-center items-center text-base shadow-md focus:outline-2 focus:outline-blue-600 focus:outline`,
        {
          "font-semibold": fontSize === "semibold",
          "font-bold": fontSize === "bold",
        },
        className
      )}
      disabled={loading}
      onClick={onClick}
    >
      {loading ? <IconLoading /> : children}
    </button>
  );
};
