import Card from "../../../../Components/sectionFourCards/Card";
import "./hsectionFour.scss";

export default function HsectionFour() {
  return (
    <div className="hsectionFour-outer-container">
      <div className="hsectionFour-inner-container">
        <div className="top-heading">
          <h3 className="heading">
            What Users think about <b>APDT™</b>
          </h3>
        </div>
        <div>
          <div className="bottom-cards-container">
            <Card
              customerComment="Manually copy pasting terms from each LOI into spreadsheets takes me anywhere from 15-20 minutes per document. Multiple LOIs adds up to hours wasted every week on. With APDT I’ve eliminated a ton of admin time that I could now spend hunting new opportunities and making connections."
              customerName="Trip russ"
              customerOrganization="90Ten"
            />
            <Card
              customerComment="Keeping up with evolving deal terms across multiple deals used to mean shuffling between LOI versions, manually comparing them side-by-side and copy-pasting updated details into spreadsheets to track changes. I actually feel like I’ve got an edge against  senior brokers doing everything “old school”."
              customerName="Oliver Steinberg"
              customerOrganization="The Retail Connection"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
