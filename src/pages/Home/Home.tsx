import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import "./Home.scss";
import ArrowWhite from "@/assets/icons/arrow-white.svg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home = (props: { activeCollection: any }) => {
  const { activeCollection } = props;
  return (
    <SideMarginWrapper>
      <div className="home-container">
        <div className="home-left-wrapper">
          <div className="home-header-text">
            <p>Clothes</p>
            <p>Designer</p>
          </div>

          <div className="home-left">
            <div className="sub-head-box">
              <div className="spacer"></div>
              <p>{activeCollection.title}</p>
            </div>

            <h1>{activeCollection.heading}</h1>

            <p>{activeCollection.description}</p>
            <button>
              SEE COLLECTION
              <img src={ArrowWhite} alt="ArrowWhite" />
            </button>
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
