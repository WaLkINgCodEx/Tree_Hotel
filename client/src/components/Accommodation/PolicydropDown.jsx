import { useState } from "react";
import ConditionList from "../Share/ConditionList/ConditionList";
const PolicydropDown = ({ policy }) => {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const toggleIsPolicyOpen = () => setIsPolicyOpen(!isPolicyOpen);

  return (
    <div className="policies-container">
      <div className={"policy" + (isPolicyOpen ? " open" : "")}>
        <div className="policy-title" onClick={toggleIsPolicyOpen}>
          {policy.title}
        </div>
        <div className="policy-details">
          <ul>
            {policy.details.map((details, index) => {
              return <ConditionList condition={details} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PolicydropDown;
