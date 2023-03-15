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

interface PathRoute {
  id: string;
  path: string;
  title: string;
  index?: boolean;
  component?: React.LazyExoticComponent;
  childrenList?: Route[];
}
interface IndexRoute {
  id: string;
  path?: string;
  title: string;
  index: boolean;
  component?: React.LazyExoticComponent;
  childrenList?: Route[];
}

type Route = PathRoute | IndexRoute;

interface PageProps {
  children: ReactNode;
  title: string;
}
