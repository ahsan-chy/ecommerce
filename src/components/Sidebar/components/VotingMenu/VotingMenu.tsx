import PaginationArrows from "@/components/PaginationArrows/PaginationArrows";
import "./VotingMenu.scss";
import star from "@/assets/icons/star.svg";
import emptyStar from "@/assets/icons/empty-star.svg";

const VotingMenu = () => {
  return (
    <div className="voting-menu-wrapper">
      <div className="current-ratings">
        <div className="star-wrapper">
          <img src={star} alt="star" />
        </div>
        <h3>4.9</h3>
      </div>
      <p>48 votes</p>
      <div className="stars-box">
        <div className="star-wrapper">
          <img src={emptyStar} alt="star" />
        </div>
        <div className="star-wrapper">
          <img src={emptyStar} alt="star" />
        </div>
        <div className="star-wrapper">
          <img src={emptyStar} alt="star" />
        </div>
        <div className="star-wrapper">
          <img src={emptyStar} alt="star" />
        </div>
        <div className="star-wrapper">
          <img src={emptyStar} alt="star" />
        </div>
      </div>
      <div className="voting-navigation-wrapper">
        <PaginationArrows current={"01"} length={"30"} />
      </div>
    </div>
  );
};

export default VotingMenu;
