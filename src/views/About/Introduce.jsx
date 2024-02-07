import classNames from "classnames";
import styles from "./index.module.scss";

export default function Introduce() {
  return (
    <div className={styles.introduce}>
      <div className="flex h-380px">
        <div className="flex-1 relative">
          <img
            src="/img/introduce.jpg"
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
    </div>
  );
}
