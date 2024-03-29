import classnames from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

export default function Nav() {
  const navList = [
    {
      title: "首页",
      path: "/",
    },
    {
      title: "关于我们",
      path: "/about",
    },
    {
      title: "产品中心",
      path: "/product",
    },
    {
      title: "行业资讯",
      path: "/information",
    },
    {
      title: "联系我们",
      path: "/contact",
    },
  ];

  const LinkList = navList.map((it) => (
    <NavLink
      to={it.path}
      key={it.path}
      className={({ isActive }) =>
        classnames(
          "relative block w-140px h-100px lh-100px text-center text-18px",
          isActive && styles.active
        )
      }
    >
      {it.title}
    </NavLink>
  ));
  return (
    <header className={classnames("w-full", styles.nav)}>
      <div className="flex items-center justify-between m-auto  w-1200px">
        <div className="flex items-center">
          <img src="vite.svg" className="w-54px h-54px" />
          <span className="ml-12px color-#4b6ce9">红谷医疗</span>
        </div>
        <div className={classnames(styles["nav-list"], "flex items-center")}>
          {LinkList}
        </div>
      </div>
    </header>
  );
}
