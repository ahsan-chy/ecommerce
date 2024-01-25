import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import BackNavigation from "@/components/BackNavigation/BackNavigation";

import "./Home.scss";
import ArrowWhite from "@/assets/icons/arrow-white.svg";
import { useNavigate } from "react-router";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home = (props: { activeCollection: any; pageType: string }) => {
  const {
    activeCollection,
    pageType, // VOTING - HOME
  } = props;

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <SideMarginWrapper>
      <div className="home-container">
        <div className="home-left-wrapper">
          <div className="home-header-text">
            <p>Clothes</p>
            <p>Designer</p>
          </div>
          {pageType === "VOTING" && (
            <div className="voting-back-wrapper">
              <BackNavigation navigateTo={"special-product"} pageName={"Back to all nominamts"} />
            </div>
          )}

          <div className="home-left">
            {pageType === "VOTING" ? (
              <div className="voting-titles-wrapper">
                <p>design by</p>
                <p>#namedesigner</p>
              </div>
            ) : (
              <div className="sub-head-box">
                <div className="spacer"></div>
                <p>{activeCollection.title}</p>
              </div>
            )}

            <h1>{activeCollection.heading}</h1>

            <p>{activeCollection.description}</p>
            {pageType !== "VOTING" && (
              <button onClick={handleNavigate}>
                SEE COLLECTION
                <img src={ArrowWhite} alt="ArrowWhite" />
              </button>
            )}
          </div>
        </div>

        <div className="collection-featured-img">
          <img src={activeCollection.mainImage} alt="" />
        </div>
      </div>
    </SideMarginWrapper>
  );
};

export default Home;
