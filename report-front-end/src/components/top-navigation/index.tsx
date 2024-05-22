import React from "react";
import { TopNavigation } from "@cloudscape-design/components";

const CustomTopNavigation = () => {
  return (
    <TopNavigation
      identity={{
        href: "#",
        title: "制造业BI数据查询助手",
        logo: {
          src: "/Amazoncom-yellow-arrow.png",
          alt: "amazon icon",
        },
      }}
    />
  );
};

export default CustomTopNavigation;
