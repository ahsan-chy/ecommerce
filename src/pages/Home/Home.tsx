import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import "./Home.scss";

import CollectionUrban from "@/assets/images/collection-urban.png";

const Home = () => {
  return (
    <SideMarginWrapper>
      <div className="home-container">
        <h1>Home</h1>

        <div className="collection-featured-img">
          <img src={CollectionUrban} alt="" />
        </div>
      </div>
    </SideMarginWrapper>
  );
};

export default Home;
