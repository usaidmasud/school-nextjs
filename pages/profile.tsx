import { NextPage } from "next";
import React from "react";
import { SchoolProfile } from "../components/moleculs";
import { HomePage } from "../components/templates";
const Profile: NextPage = () => {
  return (
    <HomePage>
      <SchoolProfile/>
    </HomePage>
  );
};

export default Profile;
