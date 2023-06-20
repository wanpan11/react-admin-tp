import { Input, Select, Radio, DatePicker, Switch, InputNumber } from "antd";

const { RangePicker } = DatePicker;

export const getFormElement = (type: string, info: FormItem) => {
  switch (type) {
    case "radio":
      return (
        <Radio.Group
          options={info!.options}
          optionType="button"
          buttonStyle="solid"
          disabled={info.disable}
        />
      );

    case "node":
      return info.leftNode;

    case "switch":
      return <Switch disabled={info.disable} />;

    case "input":
      return <Input placeholder={info.placeholder} disabled={info.disable} />;

    case "numberInput":
      return (
        <InputNumber placeholder={info.placeholder} disabled={info.disable} />
      );

    case "select":
      return (
        <Select
          placeholder={info.placeholder}
          disabled={info.disable}
          options={info.options as { value: string }[]}
          style={{ minWidth: "150px" }}
        />
      );

    case "date":
      return (
        <RangePicker
          disabled={info.disable}
          placeholder={["开始时间", "结束时间"]}
        />
      );

    case "textArea":
      return (
        <Input.TextArea
          placeholder={info.placeholder}
          disabled={info.disable}
          showCount
          maxLength={500}
          style={{ height: 120, marginBottom: 24 }}
        />
      );
  }
};
