/* eslint-disable no-use-before-define */
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

interface PathRoute {
  id: string;
  path: string;
  title?: string;
  index?: boolean;
  redirect?: string;
  component?: React.LazyExoticComponent;
  childrenList?: Route[];
}
interface IndexRoute {
  id: string;
  path?: string;
  title?: string;
  index: boolean;
  redirect?: string;
  component?: React.LazyExoticComponent;
  childrenList?: Route[];
}

type Route = PathRoute | IndexRoute;

interface PageProps {
  children: ReactNode;
  title: string;
  redirect?: string;
}
