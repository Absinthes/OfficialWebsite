import NewsBase from "../Information/components/NewsBase";
import Advantage from "./components/Advantage";
import Introduce from "./components/Introduce";
import ProductBase from "../Product/components/ProductBase";
import SwiperCard from "./components/SwiperCard";
import Title from "./components/Title";

export default function Home() {
  const list = [
    {
      title: "产品定义",
      content: (
        <p>
          <span className="color-#66a3e0">人工智能</span>
          -视网膜眼底病变辅助诊断与慢病风险评估（
          <span className="color-#66a3e0">眼底影像采集+人工智能阅片</span>
          ）。通过拍摄视网膜影像，应用人工智能（AI）技术，筛查和评估多种视网膜疾病和慢病隐患。
        </p>
      ),
    },
    {
      title: "医学原理",
      content:
        "算法向100多位顶级专家学习经验，300余万张完整的真实世界用户视网膜影像和相对应的多模态数据，由资深医学专家标注及按疾病和病变处理。",
    },
  ];
  return (
    <div>
      <SwiperCard className="h-700px" />
      <div className="w-1200px m-auto">
        <Title className="py-40px" cn="公司介绍" en="COMPANY PROFILE" />
        <Introduce />
        <Title className="py-40px" cn="我们的优势" en="OUR ADVANTAGE" />
        <Advantage />
        <Title className="py-40px" cn="产品中心" en="COMPANY PROFILE" />
        <ProductBase list={list} />
        <Title className="py-40px" cn="新闻资讯" en="NEWS" />
        <NewsBase />
        <div className="mb-40px"></div>
      </div>
    </div>
  );
}
