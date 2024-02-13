import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { HTMLAttributes } from "react";
import { AutoplayOptions, PaginationOptions } from "swiper/types";
import styles from "./index.module.scss";
import "swiper/css";
import "swiper/css/pagination";

export default function SwiperCard(props: HTMLAttributes<HTMLElement>) {
  const { className, ...rest } = props;

  const list = [
    {
      imgUrl: "/img/introduce.jpg",
    },
    {
      imgUrl: "/img/about-footer.png",
    },
    {
      imgUrl: "/img/introduce.jpg",
    },
  ];

  const autoplay: AutoplayOptions = {
    delay: 2500,
    disableOnInteraction: false,
  };

  const pagination: PaginationOptions = {
    enabled: true,
    horizontalClass: styles["swiper-pagination-horizontal"],
    bulletClass: styles["swiper-pagination-bullet"],
    bulletActiveClass: styles["swiper-pagination-bullet-active"],
  };

  return (
    <div className={classNames(styles.swiper, className)} {...rest}>
      <Swiper
        className="w-full h-full"
        autoplay={autoplay}
        pagination={pagination}
        modules={[Autoplay, Pagination]}
      >
        {list.map((it, idx) => (
          <SwiperSlide key={idx}>
            <img
              className="w-full h-full object-cover object-center"
              src={it.imgUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
