import type { FormItemInfo } from "@src/types/index";
import { Input, Select, Radio, DatePicker } from "antd";

const { RangePicker } = DatePicker;

export const getFormElement = (type: string, info: FormItemInfo) => {
  switch (type) {
    case "radio":
      return (
        <Radio.Group
          options={info.options as { label: string; value: string }[]}
          optionType="button"
          buttonStyle="solid"
        />
      );

    case "input":
      return <Input />;

    case "select":
      return <Select options={info.options as { value: string }[]} />;

    case "date":
      return <RangePicker placeholder={["开始时间", "结束时间"]} />;
  }
};
