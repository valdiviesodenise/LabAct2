function Card(props) {
  return (
    <div className="card">
      <img src={props.imgUrl} alt="card-img" className="card-img" />
      <h2>{props.productname}</h2>
      <p>{props.price}</p>
    </div>
  );
}

export default Card;
