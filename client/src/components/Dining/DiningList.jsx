import DiningCards from "./DiningCards";
import { diningList } from "../../data";
import "./style/dining.css";

const DiningList = () => {
  return (
    <div className="dining-list-wrapper">
      <div className="dining-list-container">
        {diningList.map((dining, index) => {
          return <DiningCards dining={dining} key={index} />;
        })}
      </div>
    </div>
  );
};
export default DiningList;
