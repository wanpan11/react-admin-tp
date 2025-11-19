import Layout from "&src/layout";

function System({ children }: RoutePageProps) {
  return <Layout>{children}</Layout>;
}

if (import.meta.env.MODE === "development") {
  System.displayName = "System";
}

export default System;
