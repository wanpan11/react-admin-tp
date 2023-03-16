export interface MenuItem {
  key: string;
  path: string;
  label: string | JSX.Element;
  children?: MenuItem[];
}

export interface TabInfo {
  id: string;
  label: string;
  path: string;
  index?: boolean;
  childrenList?: TabInfo[];
}

export interface FormItemInfo {
  name: string;
  label?: string;
  type: "input" | "select" | "date" | "radio";
  options?: { label?: string; value: string }[];
  rule?: { required: boolean; message: string; pattern?: RegExp };
}
