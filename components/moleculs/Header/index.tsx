import React from "react";
import Nav from "../Nav";

const Header = () => {
  return (
    <div
      className="w-full h-[528px] left-0 top-0 drop-shadow-md bg-cover bg-no-repeat bg-[#3C64B1]"
      style={{
        backgroundImage:
          "url(http://localhost:3000/assets/images/image-18.png)",
      }}
    >
      <Nav />
      <div className="mt-40 w-96 ml-20 text-white">
        <p className="text-gray-300 text-xs">Moto</p>
        <p className="text-sm mt-2 tracking-wider leading-snug">
          SMP N 1 Cibadak (Cerdas Beretika) Ceria, Empati, Rasional, Damai,
          Aktif, Sabar, Bersih, Elok, Tulus, Iman, Konsiste, Amanah.
        </p>
        <div className="mt-8">
          <button className="h-10 text-sm bg-blue-500 text-white px-4 py-2 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
