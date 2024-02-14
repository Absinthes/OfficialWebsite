import classNames from "classnames";
import styles from "./index.module.scss";
import { useState } from "react";

export default function Introduce() {
  const culture = [
    {
      type: "target",
      name: "目标",
      description: "勇于尝试，持续创新。",
    },
    {
      type: "mission",
      name: "使命",
      description: "精益求精，为客户提供最优品质。",
    },
    {
      type: "vision",
      name: "愿景",
      description: "以人为本，引领潮流。",
    },
    {
      type: "values",
      name: "价值观",
      description: "遵循责任，秉承诚信，共建美好未来。",
    },
  ] as const;
  const [active, setActive] = useState<(typeof culture)[number]>(culture[0]);

  const handleClick = (item: (typeof culture)[number]) => {
    setActive(item);
  };

  return (
    <div className={classNames(styles.introduce, "w-1200px mx-auto")}>
      <div className="flex h-380px">
        <div className="flex-1 relative">
          <img
            src="img/about/introduce.jpg"
            alt=""
            className={classNames(
              "w-432px h-310px absolute",
              styles["company-img"]
            )}
          />
          <div
            className={classNames(
              "w-215px h-314px bg-#4b6ce9",
              styles["company-square"]
            )}
          ></div>
        </div>
        <div className="company-text w-670px pt-60px">
          <div className="text-18px color-#333333 mb-20px">
            明瞳未来（北京）数字健康科技研究院有限公司
          </div>
          <div className="font-14px color-#666666">
            是一家医学人工智能创新平台，依托国家工信部医学人工智能研究与验证实验室、国家卫健委眼科标准数据库、北京同仁医院等权威机构专家资源，聚焦医学人工智能为代表的数字健康新技术、新产品、新应用，为眼健康提供全覆盖、全天候、全方位支撑，持续加强儿童青少年近视防控、维护儿童青少年视力健康，关注老年人眼健康及慢病管理。
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "h-430px p-30px box-border overflow-hidden",
          styles["main-tasks"]
        )}
      >
        <p className="flex items-center">
          <img
            src="img/about/about-task-mark.png"
            alt=""
            className="w-30px h-30px mr-10px"
          />
          <span className="text-16px">主要任务</span>
        </p>
        <p className="w-502px color-#666666 lh-28px mt-20px">
          为了助力芜湖在全省率先打造“可防可控可治、可改善预后”的数字化智能化“儿童青少年近视防控及眼健康管理模式”、“老年人眼健康及慢病管理模式”，有效提高儿童青少年和老年人视力和眼健康水平，树立“光明芜湖”全国标杆，在市政府的关心支持下，明瞳未来在鸠江区落地设立芜湖明瞳数字健康科技有限公司（以下简称“芜湖明瞳”），由明瞳未来控股，拟邀请市国有资本、省国有资本及战略投资基金等多方参投。
        </p>
      </div>
      <div>
        <div className="pt-40px text-28px color-black font-600 text-center">
          企业文化
        </div>
        <div className="mt-15px text-13px color-#666666 text-center">
          我们向着“做业内一流的互联网设计团队”这一愿景努力
        </div>
        <div className="flex items-center relative">
          <div className="w-360px flex">
            <img
              className="w-84px h-77px absolute"
              src="img/about/about-555.png"
              style={{
                left: 0,
              }}
              alt=""
            />
            <div className="w-180px flex items-center flex-col pl-40px">
              <div className="flex flex-col justify-between items-center h-77px">
                <span
                  className="w-20px h-20px rounded-50%"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #1cb2fa 0%, #0c7bf4 100%)",
                  }}
                ></span>
                <span className="text-16px">{active.name}</span>
              </div>
              <div
                className="mt-10px text-12px color-#666666"
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                {active.description}
              </div>
            </div>
          </div>
          <div className="flex-1 pb-200px pt-70px grid flex justify-around pr-30px">
            {culture.map((item, index) => {
              return (
                <div
                  className={classNames(
                    "inline-block relative gap-10px",
                    !(index % 2) && "translate-y-100px"
                  )}
                  key={item.type}
                  onClick={() => handleClick(item)}
                >
                  <div
                    className="w-178px h-178px rotate-45 rounded-10px bg-white flex items-center justify-center transition-all"
                    style={{
                      boxShadow: "0px 0px 10px 0px rgba(127, 180, 245, 0.6)",
                      background:
                        item.type == active.type
                          ? "linear-gradient(43deg, #4b6ce9 0%, #66a2fa 100%)"
                          : "white",
                    }}
                  >
                    <div
                      className="w-89px h-89px rounded-50% flex items-center justify-center transition-all"
                      style={{
                        backgroundImage:
                          item.type == active.type
                            ? "linear-gradient(43deg, #fff 0%, #fff 100%)"
                            : "linear-gradient(43deg, #4b6ce9 0%, #66a2fa 100%)",
                      }}
                    >
                      <img
                        src={`img/about/${index}${
                          item.type == active.type ? "_active" : ""
                        }.png`}
                        alt=""
                        className="rotate-315"
                      />
                    </div>
                  </div>
                  <span
                    className={classNames(
                      "absolute bottom-10px left-50% translate-x--50% text-15px font-600",
                      item.type == active.type && "text-white"
                    )}
                  >
                    {item.name}
                  </span>
                  <span
                    className={classNames(
                      "w-19px h-19px absolute bottom--70px rounded-50% left-50% translate-x--50%",
                      item.type == active.type && "hidden"
                    )}
                    style={{
                      backgroundImage:
                        "linear-gradient(270deg, #fac70e 0%, #f29506 100%)",
                    }}
                  ></span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
