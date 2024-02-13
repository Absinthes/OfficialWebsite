import News from "./News";

export default function NewsBase() {
  const list = [
    {
      title: "明瞳数科参与制定两项国家行业标准",
      imgUrl: "/img/14a658c85651c5013444e43b944393da_20230608154751A013.jpg",
      content:
        "近日，明瞳数科先后参与了科技部、工信部发起的《眼科遗传病基因变异致病性判断标准与应用指南》和",
    },
    {
      title: "2023年“暖民心”儿童青少年眼健康行动第一轮监测检查圆满结束",
      imgUrl: "/img/xxxxxx_20230608153914A012.png",
      content:
        "为响应国家关注儿童青少年眼健康的号召，贯彻执行校园视力监测相关要求，“光明芜湖”儿童青少年眼健康行动项目组走遍芜湖各所学校，为在校师生提供眼健康监测检查服务。",
    },
    {
      title: "“光明芜湖”关爱一线职工眼健康",
      imgUrl: "/img/640 (1)_20230401141543A024.jpg",
      content:
        "阳春三月，微风拂面，近日为庆祝“三八国际妇女节”，关心关爱女职工身体健康，“光明芜湖”眼健康项目组在政务一线开展关爱女职工行动。",
    },
  ];
  return (
    <div className="flex justify-between">
      <News className="w-560px" title="公司新闻" list={list} />
      <News className="w-560px" title="行业新闻" />
    </div>
  );
}
