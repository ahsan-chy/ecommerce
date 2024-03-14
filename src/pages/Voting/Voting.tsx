import Home from "../Home/Home";
import "./Voting.scss";

const Voting = (props: { activeCollection: any; handleActive: any; selectedCollections: any }) => {
  const { activeCollection, handleActive, selectedCollections } = props;

  return (
    <div>
      <Home
        activeCollection={activeCollection}
        pageType="VOTING"
        handleActive={handleActive}
        selectedCollections={selectedCollections}
      />
    </div>
  );
};

export default Voting;
