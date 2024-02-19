import React from "react";
import Title from "./Title";
import Card from "./Card";
import { dealSections } from "./data";

function Deals() {
  return (
    <div>
      {dealSections.map((section, index) => (
        <div key={index} className="Deals">
          <Title title={section.title} />
          <div className="card-container">
            {section.deals.map((deal, dealIndex) => (
              <Card
                key={dealIndex}
                imgUrl={deal.imgUrl}
                productname={deal.productname}
                price={deal.price}
              />
            ))}
          </div>
          <button className="button">VIEW ALL</button>
        </div>
      ))}
    </div>
  );
}

export default Deals;
