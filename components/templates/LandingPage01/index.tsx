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
    <>
      {/* START: navbar */}
      <nav className="h-[100px] bg-p01-prussian-blue-100 w-full p-[50px] flex justify-between items-center">
        <div className="">
          <h3 className="font-semibold text-3xl text-white">LOGO</h3>
        </div>
        <div className="inline-flex gap-8 items-center">
          <ul className="hidden  md:inline-flex gap-4">
            {menuItems.map((item, index) => (
              <li
                className={` leading-8 text-sm md:text-base ${
                  item.active ? "font-semibold" : "font-normal"
                }`}
                key={index}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="p-2 bg-p01-corn-flower-100 cursor-pointer rounded-full text-p01-prussian-blue-100">
            <FiSun className="text-xl" />
          </div>
        </div>
      </nav>

      {/* END: navbar */}
      <main className="bg-gray-200">{props.children}</main>
      {/* START: Footer */}
      <footer className="p-4 md:p-[50px] bg-gray-900 text-gray-200">
        <div className="text-center">
          <h2 className=" text-2xl font-semibold">Logo</h2>
        </div>
        <div className=" border-gray-300 border-b-2 mt-5" />

        <div className="text-center mt-5">
          <ul className="inline-flex gap-3 md:gap-8">
            {menuItems.map((item, index) => (
              <li className=" text-sm md:text-lg " key={index}>
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
          <p className="text-sm md:text-base">Copyright &copy; 2022. All Right Reserved</p>
        </div>
      </footer>
      {/* END: Footer */}
    </>
  );
};

export default LandingPage01;
