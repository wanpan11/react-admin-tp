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

interface Route {
  path: string;
  title: string;
  index?: true;
  component: React.LazyExoticComponent;
  childrenList?: Route[];
}
type Router = Route[];

interface PageProps {
  children: ReactNode;
  title: string;
}
