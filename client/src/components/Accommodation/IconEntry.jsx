const IconEntry = ({ icon, entry }) => {
  return (
    <>
      <div className="icon-entry">
        <img className="fac-icon" src={icon} alt={entry} />
        <div>{entry}</div>
      </div>
    </>
  );
};
export default IconEntry;
