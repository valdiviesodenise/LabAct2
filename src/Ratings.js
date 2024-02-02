import Title from "./Title";
import RatingContent from "./RatingContent";

function Ratings(props) {
  return (
    <div>
      <Title title="See What Others Said" />

      <div className="Ratings">
        <RatingContent
          ratingtitle="So worth it! 🎀"
          ratingdescription="It‘s breathrakingly beautiful i was stunned when i opened this simply wow 😍 and it‘s not just beautiful it‘s also high quality and great makeup i just love it even words can’t describe how beautiful this is. 💗🎀"
          username="Ariana O."
          item="Rosy Afternoon Tea"
          date="10/09/23"
        />

        <RatingContent
          ratingtitle="Gorgeous"
          ratingdescription="The design of this powder is so pretty I don't want to use it lol. The color is nice and light, and the compact cover is absolutely gorgeous, as are all Flower Knows products. Would recommend :)"
          username="Giso I."
          item="Moonlight Mermaid Jewelry Blush"
          date="07/16/23"
        />

        <RatingContent
          ratingtitle="Black Swan palette"
          ratingdescription="The Black Swan palette is the star of the show! The little imprints on the shadow are so gorgeous!!! The colors together are well coordinated. Gorgeous on my vanity. Good quality shadow,"
          username="Ophelia"
          item="Swan Ballet Six-Color Eyeshadow"
          date="09/18/23"
        />

        <RatingContent
          ratingtitle="So creamy and beautiful! Perfect Winter blush."
          ratingdescription="I purchased 02 Floral Praise and it's a vibrant, more cool-toned pink. Both the design for the external case, as well as the blush inside, were EXQUISITE."
          username="V.L"
          item="Little Angel Cream Blush"
          date="01/26/24"
        />
      </div>
    </div>
  );
}

export default Ratings;
