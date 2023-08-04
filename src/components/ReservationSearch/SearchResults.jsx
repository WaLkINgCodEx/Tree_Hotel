import { useReservationContext } from "../../contexts/ReservationContext";
import { roomType, pricing, offers } from "../../data";
import ReservationStayInfo from "./ReservationStayInfo";
import SearchResultCard from "./SearchResultCard";

const SearchResults = ({ handleNext }) => {
  const { adultNumber, kidNumber, getTotalGuests } = useReservationContext();

  const filteredList = roomType.filter((room) => {
    return room.capacity >= adultNumber + kidNumber;
  });

  return (
    <>
      {adultNumber > 0 &&
        filteredList.length !== 0 &&
        filteredList.map((room) => {
          return (
            <SearchResultCard
              roomType={room}
              offers={offers}
              handleNext={handleNext}
            />
          );
        })}
    </>
  );
};
export default SearchResults;
