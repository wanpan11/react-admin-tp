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
  type: "input" | "numberInput" | "select" | "treeSelect" | "datePick" | "rangePick" | "radio" | "checkbox" | "textArea" | "switch" | "blockNode" | "node";
  valuePropName?: import("antd").FormItemProps["valuePropName"];
  formItemProps?: import("antd").FormItemProps;
  // 特有属性
  rightNode?: React.ReactNode; // node
  options?: { label: string | React.ReactNode; value: any }[];
  otherOptions?: Record<string, any>; // 组件额外属性
}
