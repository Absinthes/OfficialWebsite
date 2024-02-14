import { HTMLAttributes } from "react";
import { Link, To } from "react-router-dom";

export type NewsItem = {
  title: string;
  imgUrl: string;
  content: string;
};

export type NewsProps = {
  title: string;
  list?: NewsItem[];
  MoreTo?: To;
} & HTMLAttributes<HTMLElement>;

export default function News({
  className,
  title,
  list = [],
  MoreTo = "",
  ...rest
}: NewsProps) {
  return (
    <div className={className} {...rest}>
      <div
        className="relative mb-20px flex justify-between"
        border="0 b-1 solid #d2d3d4"
      >
        <div
          className="py-4px text-18px color-#5091e9"
          border="0 b-3px solid #5091e9"
        >
          {title}
        </div>
        <Link className="flex items-end" to={MoreTo}>
          <img src="img/More.png" alt="" />
        </Link>
      </div>
      <div className="mb--10px">
        {list.map((it) => (
          <div className="flex mb-10px" key={it.title}>
            <img className="w-137px h-114px" src={it.imgUrl} alt="" />
            <div className="flex-1  p-14px text-14px color-#333333 bg-#f2f2f2">
              <div>{it.title}</div>
              <div className="truncate-2 text-12px lh-20px">{it.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
