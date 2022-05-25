import Image from "next/image";

const items:IGallery[] = [
  {
    title: "Fasilitas",
    src: "https://cdn.pixabay.com/photo/2022/04/25/05/43/blackbird-7155106_960_720.jpg",
  },
  {
    title: "Fasilitas",
    src: "https://cdn.pixabay.com/photo/2022/05/21/21/04/monkeys-7212290__340.jpg",
  },
  {
    title: "Fasilitas",
    src: "https://cdn.pixabay.com/photo/2022/05/21/16/00/butterfly-7211806__340.jpg",
  },
  {
    title: "Fasilitas",
    src: "https://cdn.pixabay.com/photo/2022/05/07/06/03/tulips-7179514__340.jpg",
  },
  {
    title: "Fasilitas",
    src: "https://cdn.pixabay.com/photo/2022/05/01/06/01/peacock-7166818__340.jpg",
  },
  {
    title: "Fasilitas",
    src: "https://cdn.pixabay.com/photo/2022/02/21/21/18/animal-7027637__340.jpg",
  },
];
const Gallery = () => {
  return (
    <section className="p-20">
      <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
      <div className="grid grid-cols-3 gap-1">
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

interface IGallery {
  title: string;
  src: string;
}
export const Item: React.FC<IGallery> = (props) => {
  return (
    <div className="relative h-[320px] w-auto ">
      <Image
        src={props.src}
        alt={props.title}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Gallery;
