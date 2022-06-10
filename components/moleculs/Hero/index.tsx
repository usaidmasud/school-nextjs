import React from "react";

interface Props {
  title: string;
  description: string;
}
const Hero: React.FC<Props> = ({ title, description }) => {
  return (
    <div
      className="h-[264px] left-0 top-0 drop-shadow-md bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(http://localhost:3000/assets/images/image-18.png)`,
      }}
    >
      <div className="flex justify-center items-center h-full text-white flex-col gap-4">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-base font-light  text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Hero;
