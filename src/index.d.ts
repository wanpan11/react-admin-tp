/* eslint-disable no-use-before-define */
interface PathRoute {
  id?: string;
  path: string;
  title?: string;
  index?: boolean;
  icon?: any;
  notMenu?: boolean;
  redirect?: string;
  component?: React.LazyExoticComponent;
  childrenList?: Route[];
}
interface IndexRoute {
  id?: string;
  path?: string;
  title?: string;
  index: boolean;
  icon?: any;
  notMenu?: boolean;
  redirect?: string;
  component?: React.LazyExoticComponent;
  childrenList?: Route[];
}
type Route = PathRoute | IndexRoute;
interface PageProps {
  children: ReactNode;
  title: string;
}

interface MenuItem {
  key: string;
  path: string;
  label: string | JSX.Element;
  children?: MenuItem[];
}
interface FormItem {
  name: string | (number | string)[];
  label?: string | JSX.Element;
  placeholder?: string;
  initialValue?: unknown;
  rule?: any;
  hide?: boolean;
  disable?: boolean;
  extra?: string | JSX.Element;
  type: "input" | "numberInput" | "select" | "datePick" | "rangePick" | "radio" | "checkbox" | "textArea" | "switch" | "blockNode" | "node";
  // 特有属性
  rightNode?: JSX.Element;
  mode?: "multiple";
  optionType?: "default" | "button";
  maxLength?: number;
  showTime?: boolean;
  options?: { label: string; value: any }[];
  otherOptions?: Record<string, any>; // 组件额外属性
}

interface AxiosRes<T> {
  code: number;
  data: T;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.module.less" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.jpg" {
  const classes: string;
  export default classes;
}
declare module "*.png" {
  const classes: string;
  export default classes;
}
declare module "*.jpeg" {
  const classes: string;
  export default classes;
}
declare module "*.svg" {
  const classes: string;
  export default classes;
}
declare module "*.gif" {
  const classes: string;
  export default classes;
}
