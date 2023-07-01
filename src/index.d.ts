/* eslint-disable no-use-before-define */
interface PathRoute {
  id?: string;
  path: string;
  title?: string;
  index?: boolean;
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
  options?: { label: string; value: any }[];
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
