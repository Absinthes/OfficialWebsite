import { Link } from "react-router-dom";

export default function Footer() {
  const list = [
    {
      name: "友情链接",
      icon: "/vite.svg",
      children: [
        {
          name: "科技研究院",
          link: "",
        },
        {
          name: "健康医疗",
          link: "",
        },
        {
          name: "人工智能研究院",
          link: "",
        },
      ],
    },
    {
      name: "关于我们",
      icon: "/vite.svg",
      children: [
        {
          name: "公司介绍",
          link: "",
        },
        {
          name: "团队介绍",
          link: "",
        },
        {
          name: "荣誉资质",
          link: "",
        },
      ],
    },
    {
      name: "联系我们",
      icon: "/vite.svg",
      children: [
        {
          name: "电话 0553-5888186",
          link: "",
        },
        {
          name: "邮箱 service@mtwlai.com",
          link: "",
        },
        {
          name: "网站 www.mtwlai.com",
          link: "",
        },
      ],
    },
  ];

  const Group = ({ list }: any) => {
    return (
      <>
        {list.map((it: any) => (
          <Link to={it.link} key={it.name} className="block mt-20px ml-52px">
            {it.name}
          </Link>
        ))}
      </>
    );
  };

  const QRCode = () => {
    return (
      <div className="flex flex-col gap-30px text-center">
        <div>
          <img src="img/二维码.jpg" className="w-90px h-90px" />
          <div>微信公众号</div>
        </div>
        <div>
          <img src="img/二维码.jpg" className="w-90px h-90px" />
          <div>手机端</div>
        </div>
      </div>
    );
  };

  return (
    <div className="m-auto w-full bg-#0B162B color-white ">
      <div className="flex justify-between mx-auto mt-40px pt-50px w-1200px h-350px box-border ">
        {list.map((it) => (
          <div key={it.name}>
            <div className="flex  items-center w-full">
              <img
                src={it.icon}
                className="mr-10px w-42px h-42px object-cover"
              />
              <div className="text-22px">{it.name}</div>
            </div>
            <Group list={it.children} />
          </div>
        ))}
        <QRCode />
      </div>
      <hr className="m0 border-#ffffff33 border-b-0" />
      <div className="flex flex-col justify-center h-130px text-18px text-center">
        <div className="opacity-50 lh-36px">
          版权所有©明瞳未来(北京)数字健康科技研究院有限公司
        </div>
        <a className="opacity-50 lh-36px" href="">
          京ICP备2022003830号-1
        </a>
      </div>
    </div>
  );
}
