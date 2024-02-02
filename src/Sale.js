import SaleDetails from "./SaleDetails";

function Sale(props) {
  return (
    <div className="Sale">
      <div className="Sale-img">
        <img
          src="https://pbs.twimg.com/media/GFRHvUWagAAozLo?format=png&name=900x900"
          alt="sale-img"
          className="sale-img"
        />
      </div>
      <div className="Sale-details">
        <SaleDetails
          detail1="Up To 35% OFF"
          detail2="-BUILD YOUR OWN GIFT SETS-"
          detail3="Spoil someone special with a beautiful gift set created by you. "
        />
      </div>
    </div>
  );
}

export default Sale;
