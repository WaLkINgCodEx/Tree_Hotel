import { useReservationContext } from "../contexts/ReservationContext";
import { roomType, pricing, offers } from "../data";
import SearchResultCard from "./SearchResultCard";

const SearchResults = () => {
  const { adultNumber, kidNumber } = useReservationContext();

  const filteredList = roomType.filter((room) => {
    return room.capacity >= adultNumber + kidNumber;
  });
  console.log(filteredList);
  return (
    <div className="avail-cards-container">
      {adultNumber > 0 &&
        filteredList.length !== 0 &&
        filteredList.map((room) => {
          return <SearchResultCard roomType={room} offers={offers} />;
        })}
    </div>
  );
};
export default SearchResults;
