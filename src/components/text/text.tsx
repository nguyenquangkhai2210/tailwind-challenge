import classnames from "classnames";
import { TextProps } from "./type";

export const Text = ({ children, className }: TextProps) => {
  return (
    <p className={classnames("text-base text-gray-700", className)}>
      {children}
    </p>
  );
};
