function Right(props) {
  return (
    <div className="Right">
      {props.items.map((item, index) => (
        <span key={index} className={`${item}Icon`}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default Right;
