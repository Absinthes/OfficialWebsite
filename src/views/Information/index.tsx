import NewsBase from "./components/NewsBase";

export default function Information() {
  return (
    <div className="">
      <img
        className="mb-80px w-full h-400px object-cover"
        src="/img/c4_20230322171143A051.png"
        alt=""
      />
      <div className="pb-40px"></div>
      <div className="w-1200px m-auto ">
        <NewsBase />
      </div>
      <div className="h-40px"></div>
    </div>
  );
}
