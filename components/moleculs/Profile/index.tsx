import Image from "next/image";
import React from "react";

const items: IITem[] = [
  {
    title: "Fasilitas",
    src: "/assets/logo/fasilitas.png",
    subTitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nostrum, voluptatem.",
  },
  {
    title: "Lokasi",
    src: "/assets/logo/lokasi.png",
    subTitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nostrum, voluptatem.",
  },
  {
    title: "Sejarah",
    src: "/assets/logo/sejarah.png",
    subTitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nostrum, voluptatem.",
  },
  {
    title: "Prestasi",
    src: "/assets/logo/prestasi.png",
    subTitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nostrum, voluptatem.",
  },
];
const Profile = () => {
  return (
    <section className="p-20">
      <div className="grid grid-cols-2 items-center">
        <div className="flex flex-col gap-8 pr-14">
          <h3 className="text-2xl ">Profile Sekolah</h3>
          <p className="text-base">
            Di samping adalah profil sekolah kami secara keseluruhan dari mulai
            bagian depan hingga seluruh fasilitas yang terdapat disekolah kami
            kami akan ...
          </p>
          <button className="px-4 py-1.5 text-sm w-32 rounded-md bg-blue-500 text-white">
            Lebih Lanjut
          </button>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {items.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
interface IITem {
  src: string;
  title: string;
  subTitle: string;
}
export const Item: React.FC<IITem> = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-12 h-12">
        <Image
          src={props.src}
          layout="fill"
          objectFit="cover"
          alt="Fasilitas Sekolah"
        />
      </div>
      <h3 className="text-2xl">{props.title}</h3>
      <p className="text-sm">{props.subTitle}</p>
    </div>
  );
};
