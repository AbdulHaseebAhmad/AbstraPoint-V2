import Card from "../../../../Components/sectionThreeCards/Card"
import "./HsectionThree.scss"
import brokerimg from "../../../../assets/broker.svg"
import retail from "../../../../assets/retail.svg"
import mail from "../../../../assets/mail.svg"
export default function Hsectionthree() {
  return (
    <div className="sectionThree-outer-container">
      <div className="sectionThree-inner-container">
        <div className="three-title-container">
          <h3 className="three-title">The <b>APDT™</b> solution is made for </h3>
        </div>
        <div className="three-cards-container">
          <Card text={"Auto-capture LOIs, track every change, and keep your clients auto-informed"} title={'Brokers'} img={brokerimg}/>
          <Card text={"Standardize site LOIs across markets and keep expansion on schedule."} title={'Retailers & Tenants'} img={retail}/>
          <Card text={"Centralize negotiations, audit revisions, and share the latest version with confidence"} title={'Property Owners'} img={mail}/>
        </div>
      </div>
    </div>
  )
}
