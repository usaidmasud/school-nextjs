import Image from "next/image";
import Link from "next/link";
import React from "react";

const menus: IMenu[] = [
  {
    title: "Home",
    href: "/",
    isActive: true,
  },
  {
    title: "About",
    href: "/",
    isActive: false,
  },
  {
    title: "Guru",
    href: "/",
    isActive: false,
  },
  {
    title: "Siswa",
    href: "/",
    isActive: false,
  },
  {
    title: "Pendaftaran",
    href: "/",
    isActive: false,
  },
  {
    title: "Lainnya",
    href: "/fasility",
    isActive: false,
  },
  {
    title: "Kontak",
    href: "/",
    isActive: false,
  },
];
const Nav = () => {
  return (
    <div className="w-full h-20 px-20 font-nunito">
      <div className="flex justify-between items-center h-20">
        <Image alt="logo" width={44} height={53} src="/assets/logo/logo.png" />
        <ul className="flex gap-4">
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;

interface IMenu {
  title: string;
  href: string;
  isActive: boolean;
}
export const Menu: React.FC<IMenu> = (props) => {
  return (
    <li className={`
    text-gray-300 hover:text-gray-100
    ${props.isActive ? "text-white" : ""}
    `}>
      <Link href={props.href}>
        <a className="font-light">{props.title}</a>
      </Link>
    </li>
  );
};
