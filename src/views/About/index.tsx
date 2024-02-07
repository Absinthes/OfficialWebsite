import { Tabs, TabsProps } from "antd";
import classNames from "classnames";
import { useState } from "react";
import styles from "./index.module.scss";
import Introduce from "./Introduce.jsx";

type TabHeaderProps = {
  tabs: TabsProps["items"];
  activeTab: string;
  onChange: (value: string) => void;
};

const TabHeader = ({
  tabs,
  activeTab,
  onChange = () => {},
}: TabHeaderProps) => {
  return (
    <div className="tabs-header flex mb-30px">
      {tabs?.map((item, i) => (
        <div
          key={item.key}
          className={classNames(
            styles["tabs-header-item"],
            "w-400px  bg-#e3e3e3 text-24px color-#333333 h-70px lh-70px text-center cursor-pointer relative",
            i == 1 &&
              "border-x-1px border-x-solid border-y-none border-x-#c2c2c2",
            activeTab == item.key && styles.active
          )}
          onClick={() => onChange(item.key)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default function About() {
  const tabs: TabsProps["items"] = [
    {
      key: "introduce",
      label: "公司介绍",
      children: <Introduce />,
    },
    {
      key: "team",
      label: "团队介绍",
      children: "Content of Tab Pane 2",
    },
    {
      key: "honor",
      label: "荣誉资质/学术成就",
      children: "Content of Tab Pane 3",
    },
  ];

  const [activeTab, setActiveTab] = useState("introduce");

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <>
      <div className={styles.about}>
        <div className="footer-img h-400px object-cover mb-80px">
          <img src="/img/about-footer.png" alt="" className="h-full w-full" />
        </div>
        <div
          className={classNames("w-1200px mx-auto", styles["about-container"])}
        >
          <TabHeader
            tabs={tabs}
            activeTab={activeTab}
            onChange={handleTabChange}
          />
          <Tabs activeKey={activeTab} items={tabs} onChange={handleTabChange} />
        </div>
      </div>
    </>
  );
}
