import { NextPage } from "next";
import { SchoolProfile, TablePendidik } from "../components/moleculs";
import { HomePage } from "../components/templates";
const Profile: NextPage = () => {
  return (
    <HomePage>
      <SchoolProfile/>
      <TablePendidik />
    </HomePage>
  );
};

export default Profile;
