import "./card.scss";

export default function Card({ title, text, img }) {
  return (
    <div className="card-container">
      <div className="img">
        <img src={img} alt={`${title}-image`} />
      </div>
      <div className="card-ttile">
        <h4 className="titlle">{title}</h4>
      </div>
      <div className="card-text">
        <p className="text">{text}</p>
      </div>
    </div>
  );
}
