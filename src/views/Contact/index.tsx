export default function About() {
  const list = [
    {
      url: "img/callme.png",
      content: "电话 0553-5888186",
    },
    {
      url: "img/email.png",
      content: "邮箱 service@mtwlai.com",
    },
    {
      url: "img/network.png",
      content: "网址 www.mtwlai.com",
    },
    {
      url: "img/address.png",
      content: "地址 北京市海淀区中关村大街18号14层1601A3",
    },
  ];

  return (
    <div>
      <img
        className="mb-80px h-400px w-full object-cover"
        src="img/cc_20230322171127A050.png"
        alt=""
      />
      <div className="w-1200px m-auto">
        <h1 className="pb-40px text-24px color-#4b6ce9 font-600">
          明瞳未来（北京）数字健康科技研究院有限公司
        </h1>
        <div className="flex justify-between">
          <div>
            {list.map((it) => (
              <div className="flex mb-30px">
                <img className="w-50px h-50px mr-16px" src={it.url} alt="" />
                <span className="text-24px color-#333 font-600">
                  {it.content}
                </span>
              </div>
            ))}
          </div>
          <div>
            <div className="text-center mb-30px">
              <img
                className="mb-4px w-120px h-120px"
                src="img/二维码.jpg"
                alt=""
              />
              <div className="text-24px color-#4b6ce9 font-600">微信公众号</div>
            </div>
            <div className="text-center mb-30px">
              <img
                className="mb-4px w-120px h-120px"
                src="img/二维码.jpg"
                alt=""
              />
              <div className="text-24px color-#4b6ce9 font-600">手机端</div>
            </div>
          </div>
        </div>
        <img
          className="w-full h-400px object-cover"
          src="img/组 (3)_20230409141646A007.png"
          alt=""
        />
      </div>
      <div className="h-40px"></div>
    </div>
  );
}
