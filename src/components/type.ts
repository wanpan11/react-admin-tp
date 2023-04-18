/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FormItem {
  name: string;
  type:
    | "input"
    | "numberInput"
    | "select"
    | "date"
    | "radio"
    | "textArea"
    | "switch"
    | "blockNode"
    | "node";
  placeholder?: string;
  leftNode?: JSX.Element;
  disable?: boolean;
  initialValue?: unknown;
  hide?: boolean;
  rule?: any;
  label?: string | JSX.Element;
  options?: { label?: string; value: unknown }[];
}
