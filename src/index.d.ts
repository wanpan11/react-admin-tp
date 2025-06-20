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
  children: React.ReactNode;
  title: string;
}

interface MenuItem {
  key: string | number;
  path: string;
  label: string | React.ReactNode;
  icon?: React.ReactNode;
  children?: MenuItem[];
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
