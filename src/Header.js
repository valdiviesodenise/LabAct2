import React, { useState, useEffect } from "react";
import Center from "./Center";
import Right from "./Right";

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://flowerknows.co/cdn/shop/files/5_4bdeb239-b6cf-40a7-a9ef-76be29f6c1f1.jpg?v=1705892097&width=2000",
    "https://flowerknows.co/cdn/shop/files/4_5bd1122e-9fc1-41c6-9780-588945cc2fff.jpg?v=1705892060&width=2000",
    "https://flowerknows.co/cdn/shop/files/6_f37a4399-5783-4711-ba4e-fae5b39db81c.jpg?v=1705892126&width=2000",
    "https://flowerknows.co/cdn/shop/files/ac1364bed45e7ed2ab68ecf814ff8472_d9c76062-8c0c-4b04-bb7a-3658c73fa076.jpg?v=1706753508&width=2000",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="Navbar">
        <div className="Logo">
          <img
            src="https://flowerknows.co/cdn/shop/files/1_befa55d3-62a1-45d5-bb08-e832e837de30.png?height=30&v=1704270038"
            alt="logo"
          />
        </div>
        <div className="Center">
          <Center
            items={[
              "SHOP ALL",
              "OFFERS",
              "BEST SELLERS",
              "COLLECTIONS",
              "GIFT GUIDE",
            ]}
          />
        </div>
        <div className="Right">
          <Right items={["⌕", "👤", "🛒"]} />
        </div>
      </div>
      <div className="Header">
        <img src={images[currentIndex]} alt="carousel-image" />
      </div>
    </div>
  );
}

export default Header;
