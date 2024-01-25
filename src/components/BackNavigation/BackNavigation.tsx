import { useNavigate } from "react-router";
import "./BackNavigation.scss";
import LeftArrow from "@/assets/icons/left-gray-arrow.svg";

const BackNavigation = (props: { navigateTo: string; pageName: string }) => {
  const { navigateTo, pageName } = props;

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${navigateTo}`);
  };

  return (
    <div className="back-pagination" onClick={handleNavigate}>
      <img src={LeftArrow} alt="LeftArrow" />
      <div className="name-wrapper">
        <span>{pageName || ""}</span>
      </div>
    </div>
  );
};

export default BackNavigation;
