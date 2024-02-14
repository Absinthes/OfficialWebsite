export default function Advantage() {
  const list = [
    {
      imgUrl: "img/WechatIMG537_20230322134228A001.png",
      title: "专业技术",
      content:
        "依托国家工信部医学人工智能研究与验证实验室、国家卫健委眼科医学标准数据库，顶级医疗机构专家指导。",
    },
    {
      imgUrl: "img/WechatIMG538_20230322134234A002.png",
      title: "行业领先",
      content:
        "参与制定人工智能SaMD标准。千万级数据积累，全球最大视网膜样本库，可AI识别数十种眼及全身异常风险。",
    },
    {
      imgUrl: "img/WechatIMG539_20230322134239A003.png",
      title: "产业落地",
      content:
        "依托芜湖视谷产业园区，发挥上下游集群优势。全国多地百万人次近视筛查，智能筛查系统服务于国内外上千个网点。",
    },
  ];
  return (
    <div>
      <div className="flex justify-around">
        {list.map((it, idx) => (
          <div className="flex flex-col justify-center w-300px" key={idx}>
            <img
              className="w-300px h-200px object-contain"
              src={it.imgUrl}
              alt=""
            />
            <div className="mt-10px mb-4px text-16px color-#333333 text-center lh-21px">
              {it.title}
            </div>
            <div className="text-12px color-#666666 text-center lh-16px truncate-2">
              {it.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
