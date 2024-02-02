import Title from "./Title";
import InsightDetails from "./InsightDetails";
import InsightText from "./InsightText";

function Insights(props) {
  return (
    <div>
      <Title title="Collection Insights" />
      <div className="InsightsContainer">
        <div className="InsightDetails">
          <InsightDetails
            insight1="Little Angel"
            insight2="New Mysterious Adventure Collection! The sculptural cherub and the cathedral's Rose Window create a dreamy prism fragment. This collection combines baroque and romantic colorful glass styles, unveiling a new chapter of Flower Knows."
          />
          <InsightText insight1="Swan Ballet" />
          <InsightText insight1="Moonlight Mermaid" />
          <InsightText insight1="Strawberry Rococo" />
        </div>

        <div className="InsightImage">
          <img
            src="https://flowerknows.co/cdn/shop/files/800_77d2ecaf-92c1-41c4-92f4-c7c3006eb505.jpg?v=1704434369&width=750"
            alt="insight-img"
            className="insight-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Insights;
