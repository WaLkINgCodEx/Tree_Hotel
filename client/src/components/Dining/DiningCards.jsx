import { icons } from "../../data";

const DiningCards = ({ dining }) => {
  const {
    name,
    desciption,
    attire,
    cuisine,
    image,
    time,
    dinner,
    breakfast,
    lunch,
    afternoon,
  } = dining;
  return (
    <div className="dining-card-container">
      <div className="dining-photo-container">
        <img className="dining-photo" src={image} alt={name} />
      </div>
      <div className="dining-info">
        <h5 className="dining-title">{name}</h5>
        <p className="dining-desc">{desciption}</p>
        <div className="dining-card-rows">
          {attire && (
            <div className="dining-card-row">
              <div>
                <img className="fac-icon" src={icons.attire} />
              </div>
              <div>{attire}</div>
            </div>
          )}
          <div className="dining-card-row">
            <div>
              <img className="fac-icon" src={icons.cuisine} />
            </div>
            <div>{cuisine}</div>
          </div>

          <div className="dining-card-row">
            <div>
              <img className="fac-icon" src={icons.time} />
            </div>
            <div>
              {time && <span>{time}</span>}
              {breakfast && (
                <span>
                  Breakfest: {breakfast}
                  <br />
                </span>
              )}
              {lunch && (
                <span>
                  {" "}
                  Lunch: {lunch}
                  <br />
                </span>
              )}
              {afternoon && (
                <span>
                  Afternoon tea: {afternoon}
                  <br />
                </span>
              )}
              {dinner && (
                <span>
                  Dinner: {dinner}
                  <br />
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="button-area">
          <button className="box-btn">View details</button>
        </div>
      </div>
    </div>
  );
};
export default DiningCards;
