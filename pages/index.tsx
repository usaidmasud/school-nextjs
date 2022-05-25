import type { NextPage } from "next";
import { Gallery, Profile, Sambutan } from "../components/moleculs";
import { HomePage } from "../components/templates";

const Home: NextPage = () => {
  return (
    <HomePage>
      <Sambutan />
      <Profile />

      <Gallery />

    </HomePage>
  );
};

export default Home;
