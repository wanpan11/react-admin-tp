declare interface FormItem {
  name: string | (number | string)[];
  label?: string | React.ReactNode;
  placeholder?: string;
  initialValue?: unknown;
  rule?: any;
  hide?: boolean;
  visible?: boolean;
  disable?: boolean;
  extra?: string | React.ReactNode;
  type: "input" | "numberInput" | "select" | "treeSelect" | "datePick" | "rangePick" | "radio" | "checkbox" | "textArea" | "switch" | "blockNode" | "node";
  valuePropName?: string;
  formItemProps?: import("antd").FormItemProps;
  // 特有属性
  rightNode?: React.ReactNode; // node
  options?: { label: string | React.ReactNode; value: any }[];
  otherOptions?: Record<string, any>; // 组件额外属性
}
