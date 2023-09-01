import { useReservationContext } from "../../../contexts/ReservationContext";
import { offers } from "../../../data";
import SearchResultCard from "./SearchResultCard";

const SearchResults = ({ handleNext }) => {
  const { data, searchValues, adultNumber } = useReservationContext();
  const { adultnumber } = searchValues;
  const { rooms } = data;
  const adultnumberToInt = Number(adultnumber);

  return (
    <>
      {adultNumber > 0 &&
        adultNumber > 0 &&
        rooms.length !== 0 &&
        rooms.map((room, idx) => {
          return (
            <SearchResultCard
              key={idx}
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
