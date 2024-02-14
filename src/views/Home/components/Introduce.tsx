import { Link } from "react-router-dom";

export default function Introduce() {
  return (
    <div>
      <Link to="/about" className="flex">
        <div className="flex-1 relative">
          <img
            className="absolute left-18px bottom-35px w-432px h-310px z-2"
            src="img/about/introduce.jpg"
            alt=""
          />
          <div className="absolute left-0 bottom-10px w-215px h-314px bg-#4b6ce9 z-1"></div>
          <div className="absolute left-370px bottom-0px w-80px h-35px bg-#4b6ce9 z-1"></div>
        </div>
        <div className="pl-274px pr-40px pt-60px w-984px h-380px bg-#f5f9fa box-border">
          <div className="mb-20px text-18px color-#333333">
            明瞳未来（北京）数字健康科技研究院有限公司
          </div>
          <div className="text-14px color-#666666 lh-24px ">
            是一家医学人工智能创新平台，依托国家工信部医学人工智能研究与验证实验室、国家卫健委眼科标准数据库、北京同仁医院等权威机构专家资源，聚焦医学人工智能为代表的数字健康新技术、新产品、新应用，为眼健康提供全覆盖、全天候、全方位支撑，持续加强儿童青少年近视防控、维护儿童青少年视力健康，关注老年人眼健康及慢病管理。
          </div>
        </div>
      </Link>
    </div>
  );
}
