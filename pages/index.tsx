import type { NextPage } from "next";
import { FaComments } from "react-icons/fa";
import {
  FiArrowRight,
  FiCircle,
  FiFacebook,
  FiImage,
  FiInstagram,
  FiLinkedin,
  FiMusic,
  FiVideo,
  FiZap
} from "react-icons/fi";
import { LandingPage01 } from "../components/templates";

const Home: NextPage = () => {
  return (
    <LandingPage01>
      {/* START: HERO */}
      <div className="w-full h-[500px] bg-gray-200 p-[50px]">
        <div className="grid grid-cols-7 items-center gap-8">
          <div className="col-span-3 ">
            <h3 className="font-semibold text-3xl mb-8">
              Lorem ipsum dolor sit amet.
            </h3>
            <p className="text-xl mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              magni repudiandae aliquid, quaerat delectus temporibus officiis
              maxime libero veniam ab.
            </p>
            <button className="inline-flex items-center bg-gray-400 py-5 px-8 text-base gap-4 rounded-lg">
              More Info <FiArrowRight />
            </button>
          </div>
          <div className="col-span-4 h-[400px] bg-gray-400 flex justify-center ">
            <FiImage className="m-auto text-4xl" />
          </div>
        </div>
      </div>
      {/* END: HERO */}

      {/* START: Activity */}
      <div className="h-[355px] w-full px-[50px] py-3">
        <h3 className="uppercase font-semibold text-3xl">
          Some Of Our<span className="text-gray-600">&nbsp;Activities</span>
        </h3>

        <div className="grid grid-cols-3 gap-8 my-[50px]">
          <div className="">
            <div className="w-16 h-16 bg-gray-400 rounded-2xl flex items-center justify-center">
              <FiMusic className="text-2xl" />
            </div>
            <div className="mt-6">
              <h5 className="font-semibold leading-8 text-base">Lorem</h5>
              <p className="text-base leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>
          </div>
          <div className="">
            <div className="w-16 h-16 bg-gray-400 rounded-2xl flex items-center justify-center">
              <FiVideo className="text-2xl" />
            </div>
            <div className="mt-6">
              <h5 className="font-semibold leading-8 text-base">Lorem</h5>
              <p className="text-base leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>
          </div>
          <div className="">
            <div className="w-16 h-16 bg-gray-400 rounded-2xl flex items-center justify-center">
              <FiZap className="text-2xl" />
            </div>
            <div className="mt-6">
              <h5 className="font-semibold leading-8 text-base">Lorem</h5>
              <p className="text-base leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* END: Activity */}

      {/* START: BLOG */}
      <div className="bg-gray-50 w-full px-[50px] py-[50px]">
        <h3 className="uppercase font-semibold text-3xl text-gray-600 pb-[50px]">
          From our<span className="text-gray-800">&nbsp;Blog</span>
        </h3>

        <div className="grid grid-cols-3 gap-8 ">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="">
              <div className="bg-gray-400 h-40 flex items-center justify-center rounded-md">
                <FiImage className="text-3xl" />
              </div>
              <div className="mt-5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto quia fuga recusandae atque expedita sequi, possimus
                  exercitationem eum molestias voluptatem.
                </p>

                <div className="mt-5">
                  <p className="font-semibold text-sm">
                    September, 10, 2021 by Admin
                  </p>
                </div>
                <div className="mt-2 inline-flex text-xl items-center gap-2">
                  <FaComments /> <span>10</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[50px]">
          <button className="inline-flex items-center bg-gray-400 py-3 px-5 text-base gap-4 rounded-lg">
            More Articles <FiArrowRight />
          </button>
        </div>
      </div>
      {/* END: BLOG */}

      {/* START: STAFF */}
      <div className="w-full px-[50px] py-[50px]">
        <h3 className="uppercase font-semibold text-3xl text-gray-600 pb-[50px]">
          Meet our<span className="text-gray-800">&nbsp;Staff</span>
        </h3>
        <div className="grid grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="text-center">
              <div className="h-32 w-32 bg-gray-500 rounded-full flex justify-center items-center m-auto">
                <FiImage className="text-gray-300 text-3xl" />
              </div>
              <div className="mt-4">
                <h5 className="font-semibold text-base">Afuwape J. Abiodun</h5>
                <p className="text-sm text-gray-600">consectetur adipasing</p>
              </div>
              <div className="mt-4 inline-flex gap-2 text-xl">
                <FiFacebook />
                <FiLinkedin />
                <FiInstagram />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12  gap-2 flex justify-center">
          <FiCircle />
          <FiCircle />
          <FiCircle />
        </div>
      </div>
      {/* END: STAFF */}
      {/* START: GAllery */}
      <div className="bg-gray-50 w-full px-[50px] py-[50px]">
        <h3 className="uppercase font-semibold text-3xl pb-[50px]">
          FROM our<span className="text-gray-600">&nbsp;gallery</span>
        </h3>
        <div className="grid grid-cols-3 gap-4 ">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className={`${
                index === 0 || index === 6 ? "col-span-2" : "col-span-1"
              } bg-gray-600 h-64  text-4xl flex items-center justify-center text-gray-400 rounded-md`}
            >
              <FiImage />
            </div>
          ))}
        </div>
      </div>
      {/* END: GAllery */}

      {/* START: Join Us */}
      <div className="py-12 px-[100px] bg-gray-300 text-center">
        <h1 className="text-5xl">Join Us Today</h1>
        <p className="text-xl mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorum
          distinctio corrupti sapiente saepe sint libero soluta dolorem facilis
          laborum ea ad deleniti, tenetur quas facere maiores inventore, veniam
          repellat.
        </p>

        <div className="mt-5">
          <button className="inline-flex items-center bg-gray-400 py-3 px-5 text-base gap-4 rounded-lg">
            More Articles <FiArrowRight />
          </button>
        </div>
      </div>

      {/* END: Join Us */}

     
    </LandingPage01>
  );
};

export default Home;
