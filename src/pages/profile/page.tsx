import { ProfileInfo } from "@/widgets/profile-info";
import { Layout } from "./layout";

export const Page = () => {
  return (
    <Layout
      main={<div className="text-white">Page</div>}
      profileInfo={<ProfileInfo />}
    ></Layout>
  );
};
