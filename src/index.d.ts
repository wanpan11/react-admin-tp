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
  // 公共
  name: string;
  label?: string | JSX.Element;
  placeholder?: string;
  initialValue?: unknown;
  rule?: any;
  hide?: boolean;
  disable?: boolean;
  extra?: string;
  type:
    | "input"
    | "numberInput"
    | "select"
    | "date"
    | "rangePick"
    | "radio"
    | "textArea"
    | "switch"
    | "blockNode" // 自定义 元素
    | "node"; // 自定义 右侧元素
  // 私有
  rightNode?: JSX.Element; // node
  mode?: "multiple"; // select
  maxLength?: number;
  showTime?: boolean; // date
  options?: { label: string; value: any }[]; // select radio
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
