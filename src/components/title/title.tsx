import { TitleProps } from "./type";
import classnames from "classnames";

export const Title = ({
  children,
  className,
  size = "sm",
  uppercase,
  color = "slate-600",
}: TitleProps) => {
  return (
    <h1
      className={classnames(
        `font-bold text-${color}`,
        {
          "text-xs": size === "xs",
          "text-sm": size === "sm",
          "text-2xl": size === "2xl",
          uppercase: uppercase,
        },
        className
      )}
    >
      {children}
    </h1>
  );
};
