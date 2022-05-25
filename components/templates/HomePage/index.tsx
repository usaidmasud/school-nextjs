import React from "react";
import Footer from "../../moleculs/Footer";
import Header from "../../moleculs/Header";

interface Props {
  children: React.ReactNode;
}
const HomePage: React.FC<Props> = ({ children }) => {
  return (
    <div className="font-nunito bg-gray-50">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomePage;
