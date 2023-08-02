const ReservationGuest = () => {
  return (
    <div className="guest-details-wrapper">
      <div className="guest-details-container">
        <form>
          <div className="guest-contact-info">
            <h2>Contact Details</h2>
            <div className="guest-contact-info-div">
              <div className="guest-contact-info-each-div">
                <div className="input-box">
                  <select name="prefix" id="prefix" placeholder=" ">
                    <option value="" disabled selected></option>
                    <option value="dr">Dr.</option>
                    <option value="miss">Miss.</option>
                    <option value="mr">Mr.</option>
                    <option value="mrs">Mrs.</option>
                    <option value="ms">Ms.</option>
                    <option value="pr">Pr.</option>
                    <option value="prof">Prof.</option>
                    <option value="rev">Rev.</option>
                  </select>
                  <label htmlFor="prefix">Prefix</label>
                </div>
                <div className="input-box">
                  <input type="text" name="firstname" placeholder=" " />
                  <label htmlFor="firstname">First Name</label>
                </div>
              </div>
              <div className="guest-contact-info-each-div">
                <div className="input-box">
                  <input type="text" name="lastname" placeholder=" " />
                  <label htmlFor="lastname">Last Name</label>
                </div>
              </div>
            </div>
            <div className="guest-contact-info-div">
              <div className="guest-contact-info-each-div">
                <div className="input-box">
                  <input type="tel" name="phone" placeholder=" " />
                  <label htmlFor="phone">Phone</label>
                </div>
              </div>
              <div className="guest-contact-info-each-div">
                <div className="input-box">
                  <input type="email" name="email" placeholder=" " />
                  <label htmlFor="email">Email Address</label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ReservationGuest;
