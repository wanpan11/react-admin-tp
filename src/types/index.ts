export type SiderItem = {
  label: string | JSX.Element;
  path: string;
  key: string;
  children?: null | SiderItem[];
};
