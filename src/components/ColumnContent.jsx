import { BsThreeDots } from "react-icons/bs";
import Card from "./Card";
import { FaPlus } from "react-icons/fa6";
import { getHeaderIcon } from "../utils/getHeaderIcon";

const ColumnContent = ({ data }) => {
  return (
    <div>
      <div className="column-header">
        <div className="header-left-content">
          <div className="mt-2 mr-10">{getHeaderIcon(data)}</div>
          <div className="mr-10">{data?.title}</div>
          <div>{data?.content.length}</div>
        </div>
        <div className="header-right-content">
          <FaPlus className="mr-10" fillOpacity={0.7} cursor="pointer" />
          <BsThreeDots fillOpacity={0.7} cursor="pointer" />
        </div>
      </div>
      {data?.content?.map((item, index) => (
        <div key={index} className="column-content">
          <Card data={item} />
        </div>
      ))}
    </div>
  );
};

export default ColumnContent;
