import { icons } from "../data";
import IconEntry from "./IconEntry";

const AccomCardSmall = ({ room }) => {
  const { image, roomDesc, roomType, size, capacity, bed, view } = room;
  return (
    <div className="accom-s-card-container">
      <div className="accom-s-card-top">
        <img className="accom-s-card-image" src={image} alt={roomType} />
      </div>
      <div className="accom-s-card-bottom">
        <h5 className="accom-card-title">{roomType}</h5>
        <p>{roomDesc}</p>
        <br />
        <div className="room-basics">
          <IconEntry icon={icons.capacity} entry={capacity} />
          <IconEntry icon={icons.bed} entry={bed} />
          <IconEntry icon={icons.size} entry={size} />
          {view.length > 1 ? (
            <>
              <IconEntry icon={icons.sea} entry={view[1]} />
              <IconEntry icon={icons.gardenView} entry={view[0]} />
            </>
          ) : view[0] === "Sea" ? (
            <IconEntry icon={icons.sea} entry={view} />
          ) : (
            <IconEntry icon={icons.gardenView} entry={view} />
          )}
        </div>
        <div className="accom-button-area">
          <button className="box-btn accom-btn">Explore</button>
          <button className="box-btn accom-btn inverse-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};
export default AccomCardSmall;
