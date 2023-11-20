import { useReservationContext } from "../../../contexts/ReservationContext";
import { offers } from "../../../data";
import SearchResultCard from "./SearchResultCard";

const SearchResults = () => {
  const { fetchedData, setFetchedData, activeStep } = useReservationContext();

  // console.log("fetchedData", fetchedData);
  // console.log("activeStep", activeStep);

  // let newData = fetchedData;

  // console.log("newData", newData);

  if (fetchedData && activeStep === 1) {
    return (
      <>
        {fetchedData.rooms.map((room, idx) => {
          return <SearchResultCard key={idx} roomType={room} offers={offers} />;
        })}
      </>
    );
  } else {
    console.log("No room availability data found.");
    // return;
  }
};
export default SearchResults;
