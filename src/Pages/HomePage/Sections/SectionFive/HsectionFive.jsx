import Button from "../../../../Components/buttons/Button";
import "./hsectionFive.scss";

export default function HsectionFive() {
  return (
    <div className="sectionFive-outter-container">
      <div className="sectionFive-inner-container">
        <div className="sectionFive-heading">
          <h3 className="heading">Start your free APDT™ Trial Today.</h3>
        </div>
        <div className="sectionFive-text">
          <p className="text">
            Contact us to receive a free APDT™ account and trial version for you
            and your key personnel to experience our groundbreaking AI in
            action.
          </p>
        </div>
        <div className="sectionFive-button">
          <Button />
        </div>
      </div>
    </div>
  );
}
