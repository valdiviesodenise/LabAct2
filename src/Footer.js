import FooterContent from "./FooterContent";

function Footer(props) {
  return (
    <div className="Footer">
      <div className="FooterLeft">
        <FooterContent
          header="ABOUT FLOWER KNOWS"
          text1="Brand Story"
          text2="Loyalty Program"
          text3="Affiliate Program"
          text4="Student Discount"
          text5="Teacher & Healthcare"
          text6="Discount"
        />
      </div>
      <div className="FooterCenterLeft">
        <FooterContent
          header="CUSTOMER SERVICE"
          text1="Track Your Order"
          text2="FAQ"
          text3="Contact Us"
        />
      </div>
      <div className="FooterCenterRight">
        <FooterContent
          header="CUSTOMER CARE"
          text1="Shipping Policy"
          text2="Refund Policy"
          text3="Promotion Terms & Condition"
          text4="Privacy Policy"
          text5="Terms & Condition"
        />
      </div>
      <div className="FooterRight">
        <FooterContent
          header="NEWSLETTER"
          text1="Join to get special offers, free gifts, and once-in-a-lifetime deals."
          text2="Interested in becoming Flower Knows authorized retailers?"
          text3=">> contact partnership@flowerknows.net."
        />
      </div>
    </div>
  );
}

export default Footer;
