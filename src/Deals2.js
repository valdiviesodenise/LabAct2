import Card from "./Card";

function Deals2(props) {
  return (
    <div className="Deals">
      <div className="card-container">
        <Card
          imgUrl="https://flowerknows.co/cdn/shop/files/02_4311eb10-a360-4ff7-9960-9b90562de8ac.jpg?v=1700719534&width=750"
          productname="Circus Gradient Blush"
          price="₱1,679.66"
        />
        <Card
          imgUrl="https://flowerknows.co/cdn/shop/files/m02_804dc42b-e09c-4ff2-9b62-306440bd0031.jpg?v=1684221059&width=750"
          productname="Circus Matte Lipstick"
          price="₱1,119.77"
        />
        <Card
          imgUrl="https://flowerknows.co/cdn/shop/files/c01_5059de6c-b5d9-444b-a12f-d283f33876dc.jpg?v=1684221215&width=750"
          productname="Circus Satin Lipstick"
          price="₱1,119.77"
        />
        <Card
          imgUrl="https://flowerknows.co/cdn/shop/products/02_2_4508080b-408a-404f-860c-533b7e81a1ea.jpg?v=1700644941&width=750"
          productname="Circus Loose Powder"
          price="₱1,959.60"
        />
      </div>
    </div>
  );
}

export default Deals2;
