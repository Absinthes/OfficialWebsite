import classNames from "classnames";
import style from "./index.module.scss";

type TeamType = {
  name: string;
  education: string;
  resume: {
    content: string;
  }[];
};

export default function Team() {
  const teams: TeamType[] = [
    {
      name: "刘頔",
      education: "博士",
      resume: [
        {
          content:
            "医学人工智能研究与验证国家级实验室研究员，北京师范大学国家高端智库数字健康中心研究员。长期从事互联网医疗、数字健康等领域相关工作。曾在某科创独角兽企业、某世界500强企业从事管理工作。",
        },
      ],
    },
  ];
  return (
    <div className="mt-40px w-1200px mx-auto">
      {teams.map((item) => (
        <div
          className="team-item h-317px w-1200px bg-#f6f9ff rounded-15px mb-40px overflow-hidden flex"
          style={{
            boxShadow: "0px 0px 10px 0px rgba(127, 180, 245, 0.6)",
          }}
          key={item.name}
        >
          <div className="w-19px h-317px bg-#4b6ce9 flex-shrink-0"></div>
          <div className="avator w-300px h-full flex-shrink-0"></div>
          <div className="pt-40px pr-20px pb-20px pl-60px">
            <div
              className="inline-block h-35px lh-35px text-20px color-white font-600 px-20px"
              style={{
                background: "linear-gradient(90deg, #4b6ce9 0%, #249bfb 96%)",
              }}
            >
              <span>{item.name}</span>
              <span className="text-16px ml-5px lh-28px">{item.education}</span>
            </div>
            <div className="mt-40px">
              {item.resume.map((resume) => (
                <div
                  className={classNames(
                    "mb-20px pl-20px box-border relative text-16px",
                    style["resume-item"]
                  )}
                  key={resume.content}
                >
                  {resume.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
