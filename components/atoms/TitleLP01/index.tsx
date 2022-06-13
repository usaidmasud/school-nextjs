import React from "react";

interface Props {
  title: string[];
}

const TitleLP01: React.FC<Props> = ({ title }) => {
  return (
    <h3 className="uppercase font-semibold text-3xl">
      {title[0]}
      <span className="text-gray-500">&nbsp;{title[1]}</span>
    </h3>
  );
};

export default TitleLP01;
