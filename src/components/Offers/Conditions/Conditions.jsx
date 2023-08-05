import {
  gerneralConditions,
  childPolicy,
  otherInformation,
} from "../../../data";
import ConditionList from "../../Share/ConditionList/ConditionList";
import "./style/conditions.css";

const Conditions = () => {
  return (
    <div className="conditions-wrapper">
      <div className="condition-container">
        <div className="condition-title"></div>
        <h3>General Terms & Conditions</h3>
        <div className="condition-list">
          <ul>
            {gerneralConditions.map((condition) => {
              return <ConditionList condition={condition} />;
            })}
          </ul>
          <h4>Child Policy</h4>
          <ul>
            {childPolicy.map((policy) => {
              return <ConditionList condition={policy} />;
            })}
          </ul>
          <h4>Other Information</h4>
          <ul>
            {otherInformation.map((info) => {
              return <ConditionList condition={info} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Conditions;
