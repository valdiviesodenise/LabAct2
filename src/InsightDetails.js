function InsightDetails(props) {
  return (
    <div className="Insight-details">
      <h1>{props.insight1}</h1>
      <p>{props.insight2}</p>
      <button className="button2">SHOP NOW</button>
    </div>
  );
}

export default InsightDetails;
