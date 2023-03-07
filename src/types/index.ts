export type MenuItem = {
  label: string | JSX.Element;
  path: string;
  key: string;
  children?: null | MenuItem[];
};

export type TabInfo = {
  name: string;
  path: string;
  id: string;
  index?: boolean;
  childrenList?: TabInfo[];
};

export interface FormItemInfo {
  name: string;
  type: "input" | "select" | "date" | "radio";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rule?: any;
  label?: string;
  options?: { label?: string; value: string }[];
}
