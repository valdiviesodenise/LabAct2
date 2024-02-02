function SaleDetails(props) {
  return (
    <div className="Sale-details">
      <h1>{props.detail1}</h1>
      <h2>{props.detail2}</h2>
      <p>{props.detail3}</p>
      <button className="button">SHOP NOW</button>
    </div>
  );
}
export default SaleDetails;
