import React from "react";

interface IButton {
  text:string;
  onClick?: () => void;
}
const Button:React.FC<IButton> = (props) => {
  return (
    <button className="px-4 py-2 text-base bg-blue-primary text-gray-100 rounded-sm font-medium focus:ring-2 focus:ring-blue-dark-100 hover:bg-blue-dark-100 duration-300 ">{props.text}</button>
  )
}

export default Button