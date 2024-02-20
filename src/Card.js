import React, { useState, useEffect } from "react";

function Card(props) {
  const [stockStatus, setStockStatus] = useState("In Stock");

  useEffect(() => {
    const isPalette = (productname) => {
      return productname.toLowerCase().includes("palette");
    };
    if (isPalette(props.productname)) {
      setStockStatus("Out of Stock");
    } else {
      setStockStatus("In Stock");
    }
  }, [props.productname]);

  const handleAddToCart = () => {
    if (stockStatus !== "Out of Stock") {
      setStockStatus("Successfully Added to Cart!");
      setTimeout(() => {
        setStockStatus("In Stock");
      }, 700);
    }
  };

  let message = "Successfully Added to Cart!";

  if (stockStatus === "Out of Stock") {
    message = "Out of Stock!";
  }

  return (
    <div className="card">
      <img src={props.imgUrl} alt="card-img" className="card-img" />
      <h2>{props.productname}</h2>
      <p>{props.price}</p>
      <button className="add-to-cart" onClick={handleAddToCart}>
        {stockStatus === "Out of Stock" ? "Out of Stock" : "Add to Cart"}
      </button>
      {/* Pop-up */}
      {stockStatus === "Successfully Added to Cart!" && (
        <div className="popup">{message}</div>
      )}
    </div>
  );
}

export default Card;
