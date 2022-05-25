import type { NextPage } from "next";
import Image from "next/image";
import { Profile } from "../components/moleculs";
import Gallery from "../components/moleculs/Gallery";
import { HomePage } from "../components/templates";

const Home: NextPage = () => {
  return (
    <HomePage>
      {/* START: Sambutan Kepala Sekolah */}
      <section className="p-20 flex gap-10 justify-between">
        <Image
          width={465}
          height={342}
          alt="Sambutan Kepala Sekolah"
          src="/assets/images/image-19.png"
        />
        <div className="text-gray-700 flex flex-col gap-4">
          <h3 className="text-4xl w-[400px]">
            Sambutan Kepala Sekolah SMP Negeri 1 Cibadak
          </h3>
          <p className="">
            Puji dan syukur mari kita panjatkan kehadirat Allah SWT. Yang
            senantiasa dengan sifat kasih dan sayangnya banyak memberikan nikmat
            ...
          </p>
          <button className="px-4 py-1.5 text-sm w-32 rounded-md bg-blue-500 text-white">
            Lebih Lanjut
          </button>
        </div>
      </section>
      {/* END: Sambutan Kepala Sekolah */}

      <Profile />

      <Gallery />

    </HomePage>
  );
};

export default Home;
