import { IoIosArrowDown } from "react-icons/io";
import { FaSlidersH } from "react-icons/fa";
import { useState } from "react";
import useStore from "../store";

const Filter = () => {
  const [showDetails, setShowDetails] = useState(false);
  const updateGroupBy = useStore((s) => s.updateGroupBy);
  const updateOrderBy = useStore((s) => s.updateOrderBy);
  const groupBy = useStore((s) => s.groupBy);
  const orderBy = useStore((s) => s.orderBy);
  const onDisplayClick = () => {
    setShowDetails(!showDetails);
  };

  const handleOnGroupSelect = (e) => {
    updateGroupBy(e.target.value);
  };

  const handleOnOrderSelect = (e) => {
    updateOrderBy(e.target.value);
  };

  return (
    <div>
      <div className="filter" onClick={onDisplayClick}>
        <FaSlidersH />
        <div>Display</div>
        <IoIosArrowDown />
      </div>
      {showDetails && (
        <div className="filter-details">
          <div>Grouping</div>
          <div>
            <select
              value={groupBy}
              className="selectbox"
              onChange={handleOnGroupSelect}
            >
              <option value="status">Status</option>
              <option value="priority">Priority</option>
              <option value="users">Users</option>
            </select>
          </div>
          <div>Ordering</div>
          <div>
            <select
              value={orderBy}
              className="selectbox"
              onChange={handleOnOrderSelect}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
