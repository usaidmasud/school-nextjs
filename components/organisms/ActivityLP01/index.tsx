import { FiMusic, FiZap } from "react-icons/fi";
import { SectionLP01, TitleLP01 } from "../../atoms";

const items: IItem[] = [
  {
    icon: <FiMusic className="text-2xl" />,
    title: "Lorem",
    color: "bg-p01-corn-flower-400",
    titleColor: "text-p01-corn-flower-400",
    iconColor: "text-gray-200",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing",
  },
  {
    icon: <FiZap className="text-2xl" />,
    title: "Lorem",
    color: "bg-p01-blue-green-100",
    titleColor: "text-p01-blue-green-100",
    iconColor: "text-gray-200",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing",
  },
  {
    icon: <FiZap className="text-2xl" />,
    title: "Lorem",
    color: "bg-p01-tangerine-100",
    titleColor: "text-p01-tangerine-100",
    iconColor: "text-gray-200",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing",
  },
];
const ActivityLP01 = () => {
  return (
    <SectionLP01>
      <TitleLP01 title={["Some Of Our", "Activities"]} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left my-[50px]">
        {items.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </div>
    </SectionLP01>
  );
};

interface IItem {
  icon: React.ReactNode;
  title: string;
  color: string;
  iconColor?: string;
  titleColor?: string;
  description: string;
}
const Item: React.FC<IItem> = (props) => {
  return (
    <div className="">
      <div
        className={`mx-auto md:mx-0 w-16 h-16 ${props.color} rounded-xl  flex items-center justify-center transition-all delay-75 duration-300 ease-in-out hover:rounded-3xl ${props.iconColor}`}
      >
        {props.icon}
      </div>
      <div className="mt-2 md:mt-6">
        <h5 className={`font-semibold leading-8 text-base`}>{props.title}</h5>
        <p className="text-base leading-6">{props.description}</p>
      </div>
    </div>
  );
};
export default ActivityLP01;
