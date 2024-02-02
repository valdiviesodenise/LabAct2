function FooterContent(props) {
  return (
    <div className="Footer-Content">
      <div className="Footer-Content-Text">
        <h1>{props.header}</h1>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
        <p>{props.text4}</p>
        <p>{props.text5}</p>
        <p>{props.text6}</p>
      </div>
    </div>
  );
}

export default FooterContent;
