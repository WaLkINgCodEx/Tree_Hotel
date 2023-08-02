const Facilities = ({ facility, icon }) => {
  return (
    <div className="fac-info-container">
      <div className="icon-frame">
        <img className="fac-icon" src={icon} alt={facility} />
      </div>
      <div className="text-box">
        <span>{facility}</span>
      </div>
    </div>
  );
};
export default Facilities;
