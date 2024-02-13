import classNames from "classnames";
import style from "./index.module.scss";
import { useMemo, useState } from "react";
import { chunk } from "lodash-es";

type ShowcaseType = {
  limit: number;
  data: {
    src: string;
  }[];
  activeIndex: number;
};

const getCountPage = (len: number, limit: number) => {
  return Math.ceil(len / limit);
};

const Showcase = (
  { limit, data, activeIndex }: ShowcaseType = {
    limit: 4,
    data: [],
    activeIndex: 0,
  }
) => {
  const list = useMemo(() => {
    return chunk(data, limit);
  }, [data, limit]);
  return (
    <div>
      <div
        className="overflow-hidden"
        style={{
          whiteSpace: "nowrap",
        }}
      >
        <div
          className="transition-500"
          style={{
            transform: `translateX(-${(activeIndex - 1) * 100}%)`,
          }}
        >
          {list.map((item, index) => (
            <div className="w-full justify-center inline-flex" key={index}>
              <div className="inline-block mr-10px min-w-200px inline-flex justify-center">
                {item.map(({ src }, i) => (
                  <img
                    key={i}
                    src={src}
                    className="w-200px h-200px object-contain flex-shrink-0 mr-10px"
                  ></img>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={classNames(
          "h-47px bg-white relative",
          style["credential-bottom"]
        )}
      ></div>
    </div>
  );
};

const useIndexNext = (len: number, limit: number) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const count = getCountPage(len, limit);
  const next = () => {
    if (activeIndex >= count) return;
    setActiveIndex(activeIndex + 1);
  };
  const last = () => {
    if (activeIndex <= 1) return;
    setActiveIndex(activeIndex - 1);
  };
  return {
    activeIndex,
    count: getCountPage(len, limit),
    next,
    last,
  };
};

export default function Certificate() {
  const case1 = [
    {
      src: "/img/about/credential1.jpg",
    },
    {
      src: "/img/about/credential2.jpg",
    },
    {
      src: "/img/about/credential3.jpg",
    },
    {
      src: "/img/about/credential1.jpg",
    },
    {
      src: "/img/about/credential2.jpg",
    },
    {
      src: "/img/about/credential3.jpg",
    },
  ];
  const case2 = [
    {
      src: "/img/about/credential1.jpg",
    },
    {
      src: "/img/about/credential2.jpg",
    },
    {
      src: "/img/about/credential3.jpg",
    },
    {
      src: "/img/about/credential1.jpg",
    },
    {
      src: "/img/about/credential2.jpg",
    },
  ];
  const honors = [
    {
      src: "/img/about/credential1.jpg",
    },
    {
      src: "/img/about/credential2.jpg",
    },
    {
      src: "/img/about/credential3.jpg",
    },
  ];
  const {
    activeIndex: honorIndex,
    next: honorNext,
    last: honorLast,
    count: honorCount,
  } = useIndexNext(honors.length, 3);
  const {
    activeIndex: caseIndex,
    next: case1Next,
    last: case1Last,
    count,
  } = useIndexNext(case1.length, 3);
  const { next: case2Next, last: case2Last } = useIndexNext(case2.length, 4);

  const next = () => {
    case1Next();
    case2Next();
  };

  const last = () => {
    case1Last();
    case2Last();
  };
  return (
    <div
      className="bg-cover"
      style={{
        background: "url('/img/about/aboutbk.png')",
      }}
    >
      <div className="certificate mt-40px mx-auto w-1200px">
        <div className="text-80px font-600 lh-80px">Certificate</div>
        <div className="flex">
          <div className="flex-1">
            <div className="text-36px font-600 mt-80px">荣誉资质</div>
            <div className="mt-20px mb-30px text-13px color-#666666">
              我们向着“做业内一流的科技”这一愿景努力
            </div>
            <div className="btn-box flex items-center w-200px justify-between">
              <div
                className="btn-item w-70px h-70px rounded-50% cursor-pointer"
                onClick={last}
              >
                <img src="/img/about/00000.png" className="w-full" alt="" />
              </div>
              <div className="text-24px">
                <span>{caseIndex}</span>/<span>{count}</span>
              </div>
              <div
                className="btn-item w-70px h-70px rounded-50% cursor-pointer"
                onClick={next}
              >
                <img src="/img/about/897.png" className="w-full" alt="" />
              </div>
            </div>
          </div>
          <div className="w-700px">
            <Showcase limit={3} data={case1} activeIndex={caseIndex}></Showcase>
          </div>
        </div>
        <div className="mt-125px w-880px">
          <Showcase limit={4} data={case2} activeIndex={caseIndex}></Showcase>
        </div>
        <div className="mt-180px pb-200px">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-36px font-600">荣誉资质</div>
              <div className="mt-20px mb-30px text-13px color-#666666">
                我们向着“做业内一流的科技”这一愿景努力
              </div>
            </div>
            <div>
              <div className="btn-box flex items-center w-200px justify-between">
                <div
                  className="btn-item w-70px h-70px rounded-50% cursor-pointer"
                  onClick={honorLast}
                >
                  <img src="/img/about/00000.png" className="w-full" alt="" />
                </div>
                <div className="text-24px">
                  <span>{honorIndex}</span>/<span>{honorCount}</span>
                </div>
                <div
                  className="btn-item w-70px h-70px rounded-50% cursor-pointer"
                  onClick={honorNext}
                >
                  <img src="/img/about/897.png" className="w-full" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Showcase
              limit={3}
              data={honors}
              activeIndex={honorIndex}
            ></Showcase>
          </div>
        </div>
      </div>
    </div>
  );
}
