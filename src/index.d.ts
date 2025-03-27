/* eslint-disable no-use-before-define */
interface PathRoute {
  key?: string | number;
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
  key?: string | number;
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
  key: string | number;
  path: string;
  label: string | ReactNode;
  icon?: ReactNode;
  children?: MenuItem[];
}
interface FormItem {
  name: string | (number | string)[];
  label?: string | ReactNode;
  placeholder?: string;
  initialValue?: unknown;
  rule?: any;
  hide?: boolean;
  visible?: boolean;
  disable?: boolean;
  extra?: string | ReactNode;
  type: "input" | "numberInput" | "select" | "treeSelect" | "datePick" | "rangePick" | "radio" | "checkbox" | "textArea" | "switch" | "blockNode" | "node";
  valuePropName?: string;
  // 特有属性
  rightNode?: ReactNode; // node
  mode?: "multiple";
  optionType?: "default" | "button";
  maxLength?: number;
  showTime?: boolean;
  options?: { label: string | ReactNode; value: any }[];
  otherOptions?: Record<string, any>; // 组件额外属性
}

interface AxiosRes<T> {
  code: number;
  data: T;
}

type AnyObject = Record<PropertyKey, any>;

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
