import { Outlet } from "react-router-dom";
import { Layout } from "./layouts";
export function App() {
  return (
    <Layout>
      <Outlet></Outlet>
    </Layout>
  );
}
