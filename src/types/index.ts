export interface MenuItem {
  key: string;
  path: string;
  label: string | JSX.Element;
  children?: MenuItem[];
}

export interface FormItem {
  name: string;
  label?: string;
  type: "input" | "select" | "date" | "radio";
  options?: { label?: string; value: string }[];
  rule?: { required: boolean; message: string; pattern?: RegExp };
}
