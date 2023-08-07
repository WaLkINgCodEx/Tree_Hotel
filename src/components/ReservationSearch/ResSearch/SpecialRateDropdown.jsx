const SpecialRateDropdown = ({ showDropdown, toggleDropdown }) => {
  return (
    <div
      className={
        showDropdown
          ? "additional-search-container show-dropdown"
          : "additional-search-container"
      }
    >
      <form>
        <div className="sp-rates-container">
          <input type="text" placeholder="Promo Code" />
          <input type="text" placeholder="Coupon Code" />
          <input type="text" placeholder="IATA Number" />
        </div>
        <div className="search-bottons">
          <button type="button" className="box-btn inverse-btn">
            Reset
          </button>
          <button type="button" className="box-btn">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};
export default SpecialRateDropdown;
