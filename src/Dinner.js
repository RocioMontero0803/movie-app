import React from "react";
const Dinner = ({businesses}) => {
  return (
    <div>
        <ul>
            <li>
            {businesses.name}
          </li>
        </ul>
    </div>
  );
};
export default Dinner;