import { useEffect } from "react";
import { useReservationContext } from "../../../contexts/ReservationContext";
import { offers } from "../../../data";
import SearchResultCard from "./SearchResultCard";

const SearchResults = () => {
  const { data, searchValues, adultNumber, setAdultNumber } =
    useReservationContext();
  const { adultnumber } = searchValues;
  const { rooms } = data;
  const adultnumberToInt = Number(adultnumber);

  useEffect(() => {
    if (!isNaN(adultnumber)) {
      setAdultNumber(adultnumberToInt);
    }
  }, []);

  // console.log(adultNumber);
  console.log(data);
  // console.log(rooms);
  // console.log(rooms.length);

  if ((adultNumber > 0) & (rooms.length != undefined)) {
    return (
      <>
        {rooms.map((room, idx) => {
          return <SearchResultCard key={idx} roomType={room} offers={offers} />;
        })}
      </>
    );
  }
};
export default SearchResults;
