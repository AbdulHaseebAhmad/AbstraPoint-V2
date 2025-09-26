import Button from "../../../../Components/buttons/Button";
import VideoPlayer from "../../../../Components/videoplayer/videoplayer";
import "./hsectionOne.scss";
export default function HsectionOne() {
  return (
    <div className="sectionOne-outer-container">
      <div className="sectionOne-inner-container">
        <div className="sectionOne-left">
          <div className="left_top">
            <h1 className="one-top-heading">Deal Pipeline in the Age of AI</h1>
            <p className="one-top-text">for Commercial Real Estate (CRE)</p>
            <hr />
          </div>
          <div className="left-bottom">
            <p className="one-bottom-para">
              <span className="bottom-para-span">High precision AI</span> that
              auto-summarizes your LOIs, auto-organizes your pipeline, and
              auto-reminds you - so you never miss a deal{" "}
            </p>
            <h2 className="one-bottom-heading">AP DealTracker™ - APDT™</h2>
            <Button/>
          </div>
        </div>
        <div className="sectionOne-right">
            <VideoPlayer/>
        </div>
      </div>
    </div>
  );
}
