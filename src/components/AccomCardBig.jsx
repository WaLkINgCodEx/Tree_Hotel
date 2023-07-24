import { icons } from "../data";
import IconEntry from "./IconEntry";

const AccomCardBig = ({ room }) => {
  const { image, roomDesc, roomType, size, capacity, bed, view, enquires } =
    room;
  return (
    <div className="accom-b-card-container">
      <div className="accom-b-card-top">
        <img className="accom-b-card-image" src={image} alt={roomType} />
      </div>
      <div className="accom-b-card-bottom">
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

          {!enquires && (
            <button className="box-btn accom-btn inverse-btn">Book Now</button>
          )}
        </div>
      </div>
    </div>
  );
};
export default AccomCardBig;
