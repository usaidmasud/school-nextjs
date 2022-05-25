import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const halamanUtama: ILink[] = [
  {
    href: "#",
    label: "Data Guru",
  },
  {
    href: "#",
    label: "PPDB SMPN 1 Cibadak",
  },
  {
    href: "#",
    label: "Panduan PPDB",
  },
  {
    href: "#",
    label: "Lokasi",
  },
  {
    href: "#",
    label: "Kontak",
  },
];
const jelajah: ILink[] = [
  {
    href: "#",
    label: "Sambutan",
  },
  {
    href: "#",
    label: "Profil Sekolah",
  },
  {
    href: "#",
    label: "Berita",
  },
  {
    href: "#",
    label: "Galleri",
  },
];

const sosmeds: ISosmed[] = [
  {
    icon: <FiFacebook />,
    href: "#",
  },
  {
    icon: <FiInstagram />,
    href: "#",
  },
  {
    icon: <FiTwitter />,
    href: "#",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="">
          <div className="footer-logo">
            <Image
              layout="fill"
              src="/assets/logo/logo.png"
              alt="Logo Sekolah"
            />
          </div>
          <div className="mt-8">
            <p className="text-sm">
              Jl. Siliwangi No 123, Cibadak, Cibadak, Sukabumi, Jawa Barat
              43351, Indonesia, (0266)531333
            </p>
            <div className="mt-2">
              <p className="text-sm">info@smpn1cibadak.sch.id</p>
              <p className="text-sm">smpn1cbd_kabsi@yahoo.co.id</p>
            </div>
          </div>
        </div>
        <div className="">
          <FooterMenu title="Jelajah" links={jelajah} />
        </div>
        <div className="">
          <FooterMenu title="Halaman Utama" links={halamanUtama} />
        </div>
        <div className="">
          <FooterMenuSosmed title="Media Sosial" links={sosmeds} />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-center">
          Copyright © SMP Negeri 1 Cibadak. All right Reserved. Hosting By
          IDCloudHost
        </p>
      </div>
    </footer>
  );
};

export default Footer;

interface ILink {
  href: string;
  label: string;
}

interface IFooterMenu {
  title: string;
  links: ILink[];
}
const FooterMenu: React.FC<IFooterMenu> = (props) => {
  return (
    <div className="">
      <h5 className="text-lg font-semibold mb-2">{props.title}</h5>
      <ul className="flex flex-col gap-1">
        {props.links.map((link, index) => (
          <li key={index} className="group">
            <Link href={link.href}>
              <a className="text-sm text-gray-300 hover:text-gray-100">
                {link.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ISosmed {
  icon: JSX.Element;
  href: string;
}
interface IFooterMenuSosmed {
  title: string;
  links: ISosmed[];
}
const FooterMenuSosmed: React.FC<IFooterMenuSosmed> = (props) => {
  return (
    <div className="">
      <h5 className="text-lg font-semibold mb-2">{props.title}</h5>
      <ul className="inline-flex gap-2">
        {props.links.map((link, index) => (
          <li key={index} className="group">
            <Link href={link.href}>
              <a className="text-gray-300 hover:text-gray-100">
              {link.icon}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
