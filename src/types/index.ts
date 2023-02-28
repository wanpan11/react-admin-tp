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

export interface FilterInfo {
  name: string;
  type: "input" | "select" | "date";
  label: string;
  options?: { value: string }[];
}
