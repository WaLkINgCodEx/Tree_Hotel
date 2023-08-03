import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
const ReservationAcknow = () => {
  return (
    <div className="acknow-container">
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked color="default" />}
          label="Yes, I would like to receive newsletters and special offers by email."
        />
        <FormControlLabel
          required
          control={<Checkbox color="default" />}
          label="I have read and agree with the terms specified in the Privacy Policy."
        />
        <FormControlLabel
          required
          control={<Checkbox color="default" />}
          label="I have read and agree with the Terms & Conditions."
        />
      </FormGroup>
    </div>
  );
};
export default ReservationAcknow;
