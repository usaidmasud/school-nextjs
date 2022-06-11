import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiSun, FiTwitter } from "react-icons/fi";

interface ILandingPage01Props {
  children: React.ReactNode;
}
interface IMenuItem {
  label: string;
  link?: string;
  active?: boolean;
}
const menuItems: IMenuItem[] = [
  {
    label: "Home",
    link: "/",
    active: true,
  },
  {
    label: "About",
    link: "/about",
    active: false,
  },
  {
    label: "Management",
    link: "/management",
    active: false,
  },
  {
    label: "News & Events",
    link: "/news",
    active: false,
  },
  {
    label: "Gallery",
    link: "/gallery",
    active: false,
  },
  {
    label: "Contact Us",
    link: "/contact",
    active: false,
  },
];
const LandingPage01: React.FC<ILandingPage01Props> = (props) => {
  return (
    <div className="font-poppins">
      {/* START: navbar */}
      <nav className="h-[100px] bg-gray-50 w-full p-[50px] flex justify-between items-center">
        <div className="">
          <h3 className="font-semibold text-3xl">LOGO</h3>
        </div>
        <div className="inline-flex gap-8 items-center">
          <ul className="inline-flex gap-4">
            {menuItems.map((item, index) => (
              <li
                className={` leading-8 ${
                  item.active ? "font-semibold" : "font-normal"
                }`}
                key={index}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="p-2 bg-gray-600 cursor-pointer rounded-full text-yellow-primary">
            <FiSun className="text-xl" />
          </div>
        </div>
      </nav>

      {/* END: navbar */}
      <main className="bg-gray-200">{props.children}</main>
      {/* START: Footer */}
      <footer className="bg-gray-400 p-[50px]">
        <div className="text-center">
          <h2 className=" text-2xl font-semibold">Logo</h2>
        </div>
        <div className=" border-gray-700 border-b-4 mt-5" />

        <div className="text-center mt-5">
          <ul className="inline-flex gap-8">
            {menuItems.map((item, index) => (
              <li className="text-lg " key={index}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center mt-5">
          <ul className="inline-flex gap-4 text-xl">
            <li>
              <FiFacebook />
            </li>
            <li>
              <FiTwitter />
            </li>
            <li>
              <FiInstagram />
            </li>
            <li>
              <FaLinkedin />
            </li>
          </ul>
        </div>
        <div className="text-center mt-5">
          <p className="">Copyright &copy; 2022. All Right Reserved</p>
        </div>
      </footer>
      {/* END: Footer */}
    </div>
  );
};

export default LandingPage01;
