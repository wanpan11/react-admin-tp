import { Checkbox, DatePicker, Input, InputNumber, Radio, Select, Switch, TreeSelect } from "antd";

const { RangePicker } = DatePicker;

export function getFormElement(type: FormItem["type"], info: FormItem) {
  switch (type) {
    case "radio":
      return (
        <Radio.Group
          options={info.options || []}
          optionType={info.otherOptions?.optionType || "button"}
          buttonStyle="outline"
          disabled={info.disable}
          {...info.otherOptions}
        />
      );

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
          mode={info.otherOptions?.mode}
          placeholder={info.placeholder}
          disabled={info.disable}
          options={info.options as { value: string }[]}
          className="min-w-[150px]"
          filterOption={(input, option: any) => {
            if (typeof option.label === "string") {
              return option.label.includes(input);
            }
            return false;
          }}
          {...info.otherOptions}
        />
      );

    case "rangePick":
      return <RangePicker disabled={info.disable} showTime={info.otherOptions?.showTime} placeholder={["开始时间", "结束时间"]} {...info.otherOptions} />;

    case "datePick":
      return <DatePicker disabled={info.disable} showTime={info.otherOptions?.showTime} {...info.otherOptions} />;

    case "textArea":
      return (
        <Input.TextArea
          showCount
          disabled={info.disable}
          placeholder={info.placeholder}
          maxLength={info.otherOptions?.maxLength || 500}
          classNames={{
            textarea: "h-40 resize-none",
          }}
          {...info.otherOptions}
        />
      );

    case "treeSelect":
      return (
        <TreeSelect
          allowClear
          placeholder={info.placeholder}
          treeData={info.options}
          disabled={info.disable}
          treeDefaultExpandAll
          className="w-full"
          {...info.otherOptions}
        />
      );
  }
}
