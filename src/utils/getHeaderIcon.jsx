import { BsExclamationSquareFill } from "react-icons/bs";
import { TbAntennaBars1 } from "react-icons/tb";
import { TbAntennaBars3 } from "react-icons/tb";
import { TbAntennaBars4 } from "react-icons/tb";
import { TbAntennaBars5 } from "react-icons/tb";
import { FaCircleUser } from "react-icons/fa6";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { RiProgress4Line } from "react-icons/ri";
import { CiStopwatch } from "react-icons/ci";
import useStore from "../store";

export const getHeaderIcon = (data) => {
  const groupBy = useStore((s) => s.groupBy);

  if (groupBy === "status") {
    switch (data.title) {
      case "Todo":
        return <FaRegCircle size={15} />;
      case "In progress":
        return <RiProgress4Line fill="orange" size={15} />;
      case "Backlog":
        return <CiStopwatch size={15} />;
      case "Done":
        return <FaCheckCircle fill="blue" size={15} />;
      case "Canceled":
        return <IoMdCloseCircle size={15} />;
    }
  }
  if (groupBy === "priority") {
    switch (data.title) {
      case "Urgent":
        return <BsExclamationSquareFill fill="orange" />;
      case "No Priority":
        return <TbAntennaBars1 size={25} />;
      case "Low":
        return <TbAntennaBars3 size={25} />;
      case "Medium":
        return <TbAntennaBars4 size={25} />;
      case "High":
        return <TbAntennaBars5 size={25} />;
    }
  }
  if (groupBy === "users") {
    return <FaCircleUser />;
  }
};
