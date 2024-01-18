import "./Home.scss";

import CollectionUrban from "@/assets/images/collection-urban.png";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Home</h1>

      <div className="collection-featured-img">
        <img src={CollectionUrban} alt="" />
      </div>
    </div>
  );
};

export default Home;
