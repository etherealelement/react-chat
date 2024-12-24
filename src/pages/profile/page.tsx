import { ProfileInfo } from "@/widgets/profile-info";
import { Layout } from "./layout";
import { Header } from "@/widgets/header";
export const Page = () => {
  return (
    <Layout
      main={<div className="text-white">Page</div>}
      profileInfo={<ProfileInfo />}
      header={<Header></Header>}
    ></Layout>
  );
};
