import { useReservationContext } from "../../../contexts/ReservationContext";
import { offers } from "../../../data";
import SearchResultCard from "./SearchResultCard";

const SearchResults = () => {
  const { data, searchValues, adultNumber } = useReservationContext();

  console.log(searchValues);
  console.log(data);

  if (adultNumber > 0) {
    return (
      <>
        {data.rooms.map((room, idx) => {
          return <SearchResultCard key={idx} roomType={room} offers={offers} />;
        })}
      </>
    );
  }
};
export default SearchResults;
