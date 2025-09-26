import "./card.scss";
import colonImg from "../../assets/colon.svg";

export default function Card({
  customerName,
  customerComment,
  customerOrganization,
}) {
  return (
    <div className="crads-container">
      <div className="shadow"></div>

      <div className="cards-content">
        <div className="img">
          <img src={colonImg} alt="colonnImge" className="colon-img" />
        </div>
        <div className="comment-text">
          <p className="comment">{customerComment}</p>
        </div>
        <div className="details-container">
          <p className="name">{customerName}</p>
          <p className="organisation">{customerOrganization}</p>
        </div>
      </div>
    </div>
  );
}
