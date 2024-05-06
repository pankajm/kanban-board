import { GoDotFill } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { truncate } from "../utils/helper";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div>{data.id}</div>
        <div>
          <FaCircleUser size={18} />
        </div>
      </div>
      <div className="card-title">{truncate(data.title, 50)}</div>
      <div className="card-tag">
        <div className="badge">
          <BsThreeDots />
        </div>
        {data?.tag?.map((tag) => (
          <div key={tag} className="tag-item badge">
            <span>
              <GoDotFill size={20} />
            </span>
            <span>{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
