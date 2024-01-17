import { Input, Select, Radio, DatePicker, Switch, InputNumber, Checkbox } from "antd";

const { RangePicker } = DatePicker;

export const getFormElement = (type: string, info: FormItem) => {
  switch (type) {
    case "radio":
      return <Radio.Group options={info.options || []} optionType={info.optionType || "button"} buttonStyle="solid" disabled={info.disable} {...info.otherOptions} />;

    case "checkbox":
      return <Checkbox.Group style={{ width: "100%" }} options={info.options || []} {...info.otherOptions} />;

    case "node":
      return info.rightNode;

    case "switch":
      return <Switch size="small" disabled={info.disable} {...info.otherOptions} />;

    case "input":
      return <Input placeholder={info.placeholder} disabled={info.disable} {...info.otherOptions} />;

    case "numberInput":
      return <InputNumber className="w-full" placeholder={info.placeholder} disabled={info.disable} {...info.otherOptions} />;

    case "select":
      return (
        <Select
          showSearch
          allowClear
          mode={info.mode}
          placeholder={info.placeholder}
          disabled={info.disable}
          options={info.options as { value: string }[]}
          className="min-w-[150px]"
          filterOption={(input, option: any) => {
            return (option.label as string).includes(input);
          }}
          {...info.otherOptions}
        />
      );

    case "rangePick":
      return <RangePicker disabled={info.disable} showTime={info.showTime} placeholder={["开始时间", "结束时间"]} {...info.otherOptions} />;

    case "datePick":
      return <DatePicker disabled={info.disable} showTime={info.showTime} {...info.otherOptions} />;

    case "textArea":
      return (
        <Input.TextArea placeholder={info.placeholder} disabled={info.disable} showCount maxLength={info.maxLength || 500} className="mb-6 h-32" {...info.otherOptions} />
      );
  }
};
