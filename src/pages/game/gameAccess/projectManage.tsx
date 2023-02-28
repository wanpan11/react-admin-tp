import React from "react";
import FormFilter from "@src/components/FormFilter";
import type { FilterInfo } from "@src/types/index";

const filterInfo: FilterInfo[] = [
  { name: "projectName", type: "input", label: "项目名称" },
  { name: "projectId", type: "input", label: "项目ID" },
  {
    name: "projectType",
    type: "date",
    label: "日期",
    options: [{ value: "我也不知道选什么" }],
  },
  {
    name: "projectTy",
    type: "select",
    label: "项目类型",
    options: [{ value: "我也不知道选什么" }],
  },
  {
    name: "projectT",
    type: "select",
    label: "项目类型",
    options: [{ value: "我也不知道选什么" }],
  },
];

const ProjectManage = () => {
  const onSubmit = (value: Record<string, string>) => {
    console.log("ProjectManage ===> ", value);
  };

  return (
    <div>
      <FormFilter filterInfo={filterInfo} onSubmit={onSubmit} reset />
    </div>
  );
};

export default ProjectManage;
