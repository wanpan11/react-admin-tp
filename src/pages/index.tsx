import Layout from "&src/layout";

function System({ children }: RoutePageProps) {
  return <Layout>{children}</Layout>;
}

if (process.env.PUBLIC_ENV === "development") {
  System.displayName = "System";
}

export default System;
