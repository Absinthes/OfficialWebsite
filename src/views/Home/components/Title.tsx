import classNames from "classnames";
import { HTMLAttributes } from "react";

export type TitleProps = {
  cn: string;
  en: string;
} & HTMLAttributes<HTMLElement>;

export default function Title({ cn, en, className, ...rest }: TitleProps) {
  return (
    <div className={className}>
      <span
        className={classNames("mr-20px color-#000 text-24px font-400")}
        {...rest}
      >
        {cn}
      </span>
      <span className="color-#9f9f9f text-20px font-400">{en}</span>
    </div>
  );
}
