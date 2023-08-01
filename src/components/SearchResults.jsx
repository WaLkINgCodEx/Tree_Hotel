import { useReservationContext } from "../contexts/ReservationContext";
import { roomType, pricing, offers } from "../data";
import ReservationStayInfo from "./ReservationStayInfo";
import SearchResultCard from "./SearchResultCard";

const SearchResults = () => {
  const { adultNumber, kidNumber, getTotalGuests } = useReservationContext();

  const filteredList = roomType.filter((room) => {
    return room.capacity >= adultNumber + kidNumber;
  });

  return (
    <div className="avail-cards-container">
      <div className="avail-results-container">
        <div className="results-left">
          {adultNumber > 0 &&
            filteredList.length !== 0 &&
            filteredList.map((room) => {
              return <SearchResultCard roomType={room} offers={offers} />;
            })}
        </div>
        <div className="results-right">
          {getTotalGuests() > 0 && <ReservationStayInfo />}
        </div>
      </div>
    </div>
  );
};
export default SearchResults;
