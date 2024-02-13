import ProductBase from "./components/ProductBase";

export default function About() {
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
    {
      title: "医学原理",
      content:
        "视网膜是全身唯一可以直接观察到血管和神经的组织，是检测全身健康的窗口。视网膜对糖尿病、高血压、惯些病、帕金森、老年痴呆等众多全身性慢病并发症的诊断和预后判断起到重要的作用，对高度近视、AMD、青光眼、白内障等眼科疾病更是有着直接的诊断意义。",
    },
    {
      title: "检测能力",
      content:
        "检测能力有7类、30+项眼底病变 + 5项慢病风险。识别准确率超过低年资眼科专科医生。",
    },
  ];
  return (
    <div>
      <img
        className="mb-80px w-full h-400px object-cover"
        src="/img/about-footer.png"
        alt=""
      />
      <div className="w-1200px m-auto">
        <ProductBase list={list} />
      </div>
      <img
        className="w-full h-885px object-cover"
        src="/img/组 (1)_20230409140005A001.png"
        alt=""
      />
    </div>
  );
}
