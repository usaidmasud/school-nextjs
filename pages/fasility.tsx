import { NextPage } from "next";
import Image from "next/image";
import { Button } from "../components/atoms";
import { Hero } from "../components/moleculs";
import { HomePage } from "../components/templates";

const Fasility: NextPage = () => {
  return (
    <HomePage>
      <Hero
        title="Fasilitas SMP Negeri 1 Cibadak"
        description="Terdapat beberapa fasilitas di SMP Negeri 1 Cibadak"
      />

      <section className=" p-8">
        <div className="grid grid-cols-3 gap-4">
          <Item
            image="https://cdn.pixabay.com/photo/2020/04/05/07/47/security-5004948__340.jpg"
            title="CCTV"
            description="your description here"
          />
          <Item
            image="https://cdn.pixabay.com/photo/2014/01/14/15/10/cabin-244647__340.jpg"
            title="Green House"
            description="your description here"
          />
          <Item
            image="https://cdn.pixabay.com/photo/2015/04/06/22/33/trophies-710169__340.jpg"
            title="Trophy"
            description="your description here"
          />
          <Item
            image="https://cdn.pixabay.com/photo/2013/02/26/01/10/auditorium-86197__340.jpg"
            title="Aula"
            description="your description here"
          />
          <Item
            image="https://cdn.pixabay.com/photo/2016/01/01/13/56/vintage-tv-1116587__340.jpg"
            title="TV"
            description="your description here"
          />
          <Item
            image="https://cdn.pixabay.com/photo/2018/06/26/05/08/lab-3498584__340.jpg"
            title="Laboratorium"
            description="your description here"
          />
        </div>
        <div className="mt-8 m-auto text-center">
          <Button text="More Fasility" />
        </div>
      </section>
    </HomePage>
  );
};

interface IItem {
  title: string;
  image: string;
  description: string;
}
const Item: React.FC<IItem> = (props) => {
  return (
    <div className="border border-gray-300 shadow rounded-md overflow-hidden">
      <div className="relative h-48 w-auto">
        <Image
          src={props.image}
          alt={props.title}
          layout="fill"
          className=""
          objectFit="cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-blue-primary bg-opacity-70  p-1">
          <p className="text-xl text-center text-gray-200">{props.title}</p>
        </div>
      </div>
      <div className="p-2">
        <p className="text-sm text-gray-700">{props.description}</p>
      </div>
    </div>
  );
};
export default Fasility;
