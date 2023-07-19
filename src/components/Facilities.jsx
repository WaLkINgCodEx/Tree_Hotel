const Facilities = ({ facility, icon }) => {
  return (
    <div className="fac-info-container">
      <div>
        <img className="fac-icon" src={icon} alt={facility} />
      </div>
      <div>{facility}</div>
    </div>
  );
};
export default Facilities;
