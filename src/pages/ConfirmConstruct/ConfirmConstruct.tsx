import "./ConfirmConstruct.scss";
import CreateShirt from "@/assets/images/create-shirt.png";
import ArrowWhite from "@/assets/icons/long-white-arrow.svg";
import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import BackNavigation from "@/components/BackNavigation/BackNavigation";

const ConfirmConstruct = () => {

  return (
    <SideMarginWrapper>
      <div className="confirm-construct-wrapper">
        <div className="top-wrapper">
          <div className="products-header-text">
            <p>Clothes</p>
            <p>Designer</p>
          </div>
        </div>
        <div className="content-data-wrapper">
          <h2>To Vote</h2>
          <p>Give a description of your design, and send it to the competition.</p>

          <div className="vot-form-wrapper">
            <div className="left-form">
              <img src={CreateShirt} alt="CreateShirt" />
            </div>
            <div className="right-content-wrapper">
              <div className="right-form">
                <div className="project-row">
                  <p>Name Project</p>
                  <input type="text" placeholder="Minimal Triangle" />
                </div>
                <div className="project-row">
                  <p>Nickname</p>
                  <input type="text" placeholder="John" />
                  <p className="social-text">Social networks</p>
                  <input type="text" placeholder="@socialyour" />
                </div>
                <div className="project-description">
                  <div className="description-text-wrapper">
                    <p>Description</p>
                    <span>7-200 Characters</span>
                  </div>
                  <textarea rows={5} cols={50}>
                    Stylish and youthful design for confident and laughing young guys.
                  </textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="vote-footer">
            <div className="to-vote-wrapper">
              <h3>
                To Vote
                <img src={ArrowWhite} alt="" />
              </h3>
              <p>Publish for the "Design Months" </p>
            </div>

            <div className="construct-back-wrapper">
              <BackNavigation navigateTo={"construct"} pageName={"Back to constructor"} />
            </div>
          </div>
        </div>
      </div>
    </SideMarginWrapper>
  );
};

export default ConfirmConstruct;
