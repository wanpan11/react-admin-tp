declare interface FormItem {
  name?: string | (number | string)[];
  label?: string | React.ReactNode;
  placeholder?: string;
  initialValue?: unknown;
  rule?: import("antd").FormRule;
  hide?: boolean;
  visible?: boolean;
  disable?: boolean;
  extra?: string | React.ReactNode;
  type:
    "input"
    | "textArea"
    | "numberInput"
    | "select"
    | "treeSelect"
    | "radio"
    | "switch"
    | "checkbox"
    | "datePick"
    | "rangePick"
  // 特有属性
    | "blockNode"
    | "inputNode";
  valuePropName?: import("antd").FormItemProps["valuePropName"];
  formItemProps?: import("antd").FormItemProps;
  // 特有属性
  inputNode?: React.ReactNode; // 输入组件
  options?: { label: string | React.ReactNode; value: any }[];
  otherOptions?: Record<string, any>; // 组件额外属性
}
