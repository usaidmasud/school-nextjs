import { useRouter } from "next/router";
import React from "react";
import Footer from "../../moleculs/Footer";
import Header from "../../moleculs/Header";
import HeaderMini from "../../moleculs/HeaderMini";

interface Props {
  children: React.ReactNode;
}
const HomePage: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="font-nunito bg-gray-50">
      {
        router.pathname === "/" ? <Header /> : <HeaderMini />
      }
      {children}
      <Footer />
    </div>
  );
};

export default HomePage;
