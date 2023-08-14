import { roomType } from "../../data";
import AccomCardSmall from "./AccomCardSmall";
import AccomCardBig from "./AccomCardBig";
import "./style/accommodation.css";

const RoomCards = () => {
  return (
    <div className="room-cards-wrapper">
      <div className="room-cards-container">
        {roomType
          .filter((room) => room.size < 200)
          .map((room, index) => {
            return <AccomCardSmall room={room} key={index} />;
          })}
      </div>
      <div className="room-cards-container">
        {roomType
          .filter((room) => room.size > 200)
          .map((room, index) => {
            return <AccomCardBig room={room} key={index} />;
          })}
      </div>
    </div>
  );
};
export default RoomCards;
