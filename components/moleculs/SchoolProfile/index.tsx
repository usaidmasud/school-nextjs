import Image from "next/image";
import React from "react";
import { FaGlobe, FaMap, FaUniversity } from "react-icons/fa";

const ShoolProfile = () => {
  return (
    <div className="px-20 my-20">
      <h2 className="text-center mb-20 text-4xl font-semibold">
        SMP Negeri 1 Cibadak
      </h2>

      <div className="grid grid-cols-6 ">
        <div className="col-span-2 bg-blue-500 rounded-md px-8 py-16">
          <div className="">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full ">
                <FaUniversity size={24} />
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center text-gray-100 mt-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold">Nama Sekolah</h3>
                <p className="text-gray-200 font-light">SMP Negeri 1 Cibadak</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">Nama Kepala Sekolah</h3>
                <p className="text-gray-200 font-light">Drs Ossad</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full ">
                <FaMap size={24} />
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center text-gray-100 mt-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold">Alamat</h3>
                <p className="text-gray-200 font-light">
                  Jln. Siliwangi No. 123 Cibadak{" "}
                </p>
                <p className="text-gray-200 font-light">
                  Sukabumi - Jawa Barat
                </p>
                <p className="text-gray-200 font-light">43351</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full ">
                <FaGlobe size={24} />
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center text-gray-100 mt-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold">Website / Email</h3>
                <p className="text-gray-200 font-light">smpn1cibadak.sch.id</p>
                <p className="text-gray-200 font-light">
                  smpn1cbd_kabsi@yahoo.com
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center text-gray-100 mt-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold">Telpon</h3>
                <p className="text-gray-200 font-light">(0266) 531333</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 px-8">
          <div className="grid grid-cols-2 gap-8">
            <MenuRight />
            <MenuRight />
            <MenuRight />
            <MenuRight />
            <MenuRight />
            <MenuRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoolProfile;

interface IMenuRight {
  image: string;
}
export const MenuRight: React.FC = () => {
  return (
    <div className="w-full p-8 border border-gray-300 rounded-md shadow-sm">
      <div className="flex justify-center">
        <div className="relative w-8 h-8">
          <Image
            alt="text"
            objectFit="cover"
            layout="fill"
            src="/assets/logo/profile-01.png"
          />
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">No Pendirian Sekolah</h3>
        <p className="text-sm">421/997/2005</p>
        <h3 className="text-lg font-semibold">Nomor Sertifikat</h3>
        <p className="text-sm">421/997/2005</p>
      </div>
    </div>
  );
};
