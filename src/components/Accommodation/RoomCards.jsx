import { roomType } from "../../data";
import AccomCardSmall from "./AccomCardSmall";
import AccomCardBig from "./AccomCardBig";
const RoomCards = () => {
  return (
    <div className="room-cards-wrapper">
      <div className="room-cards-container">
        {roomType
          .filter((room) => room.size < 200)
          .map((room) => {
            return <AccomCardSmall room={room} />;
          })}
      </div>
      <div className="room-cards-container">
        {roomType
          .filter((room) => room.size > 200)
          .map((room) => {
            return <AccomCardBig room={room} />;
          })}
      </div>
    </div>
  );
};
export default RoomCards;
