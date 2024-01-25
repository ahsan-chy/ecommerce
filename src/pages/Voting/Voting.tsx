import Home from "../Home/Home";
import "./Voting.scss";

const Voting = (props: { activeCollection: any }) => {
  const { activeCollection } = props;

  return (
    <div>
      <Home activeCollection={activeCollection} pageType="VOTING" />
    </div>
  );
};

export default Voting;
