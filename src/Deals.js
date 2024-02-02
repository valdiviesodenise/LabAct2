import Title from "./Title";
import Card from "./Card";

function Deals(props) {
  return (
    <div>
      <div className="Deals">
        <Title title="Buy One, Get One 50% OFF" />
        <div className="card-container">
          <Card
            imgUrl="https://flowerknows.co/cdn/shop/files/c03_01d66433-747d-4a50-9b72-3dcdff1347a8.jpg?v=1706666862&width=750"
            productname="Little Angel Matte Lipstick C03 Radiant Seraph"
            price="₱1,125.77"
          />
          <Card
            imgUrl="https://flowerknows.co/cdn/shop/files/02_275c0988-2f65-49fa-9edb-7ae75a2d9fcf.jpg?v=1706666912&width=750"
            productname="Swan Ballet Shine Lipstick B02 Mary Jane"
            price="₱1,125.77"
          />
          <Card
            imgUrl="https://flowerknows.co/cdn/shop/files/ge04_282c1bc5-32b1-48ee-9ea6-b31569b04cfb.jpg?v=1706666806&width=750"
            productname="Moonlight Mermaid Jewelry Lip Gloss GE04 Moon Stone"
            price="₱1,125.77"
          />
          <Card
            imgUrl="https://flowerknows.co/cdn/shop/files/s02_fa7773fd-019a-4ab4-b9dc-8e5d82ab0abe.jpg?v=1706666960&width=750"
            productname="Strawberry Rococo Cloud Lip Cream S02 Peachy Milk"
            price="₱1,125.77"
          />
        </div>
        <button className="button">VIEW ALL</button>
      </div>

      <div className="Deals">
        <Title title="Galentine's Day Gift Guide" />
        <div className="card-container">
          <Card
            imgUrl="https://flowerknows.co/cdn/shop/files/ced3dcc7bbaabb1b8a68ec09c7fcb368.jpg?v=1706684971&width=750"
            productname="White Vanilla Set"
            price="₱6,326.24"
          />
          <Card
            imgUrl="https://flowerknows.co/cdn/shop/files/d879c0061cbefb0fb0de597f377256a0.jpg?v=1706684891&width=750"
            productname="Love Poem Set"
            price="₱5,934.32"
          />
          <Card
            imgUrl="https://flowerknows.co/cdn/shop/files/b3d8a805bc20570b285e17cb43c52113.jpg?v=1706684792&width=750"
            productname="Glaming Obsidian Set"
            price="₱6,326.19"
          />
          <Card
            imgUrl="https://flowerknows.co/cdn/shop/files/allin_f49e6be2-25dc-404f-8632-5a25f7251022.jpg?v=1705822263&width=750"
            productname="Little Angel All-In Gift Set"
            price="₱44,731.06"
          />
        </div>
        <button className="button">VIEW ALL</button>
      </div>

      <div className="Deals">
        <Title title="Little Angel 🏹" />
        <div className="card-container">
          <Card
            imgUrl="https://flowerknows.co/cdn/shop/files/allin_f49e6be2-25dc-404f-8632-5a25f7251022.jpg?v=1705822263&width=750"
            productname="Little Angel All-In Gift Set"
            price="₱44,730.74"
          />
          <Card
            imgUrl="https://flowerknows.co/cdn/shop/files/l01.jpg?v=1704350267&width=750"
            productname="Little Angel Embossed Highlighter"
            price="₱1,679.50"
          />
          <Card
            imgUrl="https://flowerknows.co/cdn/shop/files/1_1260100a-c465-4a01-8793-4016fec56eb9.jpg?v=1704347211&width=750"
            productname="Little Angel 9-Color Eyeshadow Palette"
            price="₱2,519.25"
          />
          <Card
            imgUrl="https://flowerknows.co/cdn/shop/files/01_f8cab003-025e-4d4a-b3fb-f20c7ee3c46a.jpg?v=1704350039&width=750"
            productname="Little Angel Cream Blush"
            price="₱1,455.57"
          />
        </div>
        <button className="button">VIEW ALL</button>
      </div>

      <div className="Deals">
        <Title title="Best Sellers" />
        <div className="card-container">
          <Card
            imgUrl="https://flowerknows.co/cdn/shop/products/MoonlightMermaidJewelryLipGloss01.jpg?v=1683708417&width=750"
            productname="Moonlight Mermaid Jewelry Lip Gloss"
            price="₱1,119.60"
          />
          <Card
            imgUrl="https://flowerknows.co/cdn/shop/files/swan-ballet-eyeshadow-01-white-swan.jpg?v=1703239865&width=750"
            productname="Swan Ballet Six-Color Eyeshadow Palette"
            price="₱1,959.30"
          />
          <Card
            imgUrl="https://flowerknows.co/cdn/shop/products/MoonlightMermaidFive-ColorJewelryEyeshadowPalette01.jpg?v=1687856090&width=750"
            productname="Moonlight Mermaid Five-Color Jewelry Eyeshadow Palette"
            price="₱1,959.30"
          />
          <Card
            imgUrl="https://flowerknows.co/cdn/shop/products/1_d64257e3-6be0-44b3-bb0b-10fb29e1d0c4.jpg?v=1683709829&width=750"
            productname="Strawberry Rococo Cloud Lip Cream"
            price="₱1,119.60"
          />
        </div>
        <button className="button">VIEW ALL</button>
      </div>
    </div>
  );
}

export default Deals;
