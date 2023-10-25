import { Input, Select, Radio, DatePicker, Switch, InputNumber, Checkbox } from "antd";

const { RangePicker } = DatePicker;

export const getFormElement = (type: string, info: FormItem) => {
  switch (type) {
    case "radio":
      return <Radio.Group options={info.options as { label: string; value: string }[]} optionType="button" buttonStyle="solid" disabled={info.disable} />;

    case "checkbox":
      return <Checkbox.Group style={{ width: "100%" }} options={info.options} />;

    case "node":
      return info.rightNode;

    case "switch":
      return <Switch size="small" disabled={info.disable} />;

    case "input":
      return <Input placeholder={info.placeholder} disabled={info.disable} />;

    case "numberInput":
      return <InputNumber className="w-full" placeholder={info.placeholder} disabled={info.disable} />;

    case "select":
      return (
        <Select
          mode={info.mode}
          allowClear={true}
          placeholder={info.placeholder}
          disabled={info.disable}
          options={info.options as { value: string }[]}
          className="min-w-[150px]"
        />
      );

    case "rangePick":
      return <RangePicker disabled={info.disable} showTime={info.showTime} placeholder={["开始时间", "结束时间"]} />;

    case "datePick":
      return <DatePicker disabled={info.disable} showTime={info.showTime} />;

    case "textArea":
      return <Input.TextArea placeholder={info.placeholder} disabled={info.disable} showCount maxLength={info.maxLength || 500} className="mb-6 h-32" />;
  }
};
