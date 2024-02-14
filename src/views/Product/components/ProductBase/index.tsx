import classNames from "classnames";
import styles from "./index.module.scss";
import { Link, To } from "react-router-dom";

export type ListItems = {
  title: string;
  content: JSX.Element | string;
};

export type ProductBaseProps = {
  list: ListItems[];
  linkTo?: To;
};

export default function ProductBase({ list, linkTo = "" }: ProductBaseProps) {
  return (
    <div>
      <Link to={linkTo} className="flex justify-between">
        <img
          className="w-500px h-600px object-cover"
          src="img/编组 14_20230409140200A002.png"
          alt=""
        />
        <div className="flex flex-col items-start ">
          {list.map((it, idx) => (
            <div className={classNames(styles["product-box"])} key={idx}>
              <div
                className={classNames(
                  "flex flex-col justify-around",
                  styles["product-tag"]
                )}
              >
                <div className="text-18px color-white font-500">{it.title}</div>
                <div className="w-15px h-1px bg-white "></div>
                <div className="text-18px color-white font-500">
                  {(idx + 1).toString().padStart(2, "0")}
                </div>
              </div>
              <div>{it.content}</div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}
