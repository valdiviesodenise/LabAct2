import React, { useState } from "react";

function Card(props) {
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    if (props.stock === "In Stock") {
      // Perform add to cart logic here
      setShowMessage(true);
    }
  };

  return (
    <div className="card">
      <img src={props.imgUrl} alt="card-img" className="card-img" />
      <h2>{props.productname}</h2>
      <p>{props.price}</p>
      <button
        className="button"
        onClick={handleAddToCart}
        disabled={props.stock === "Out of Stock"}
      >
        {props.stock === "Out of Stock" ? "Sold Out" : "Add to Cart"}
      </button>
      {showMessage && (
        <div className="popup-message">Successfully added to cart!</div>
      )}
    </div>
  );
}

export default Card;
