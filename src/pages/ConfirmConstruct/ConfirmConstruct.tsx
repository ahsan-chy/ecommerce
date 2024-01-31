import "./ConfirmConstruct.scss";
import CreateShirt from "@/assets/images/create-shirt.png";
import ArrowWhite from "@/assets/icons/long-white-arrow.svg";
import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import BackNavigation from "@/components/BackNavigation/BackNavigation";
import { motion } from "framer-motion";

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
          <motion.h2
            initial={{ x: +50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
            exit={{ x: +50 }}>
            To Vote
          </motion.h2>
          <motion.p
            initial={{ x: +50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
            exit={{ x: +50 }}>
            Give a description of your design, and send it to the competition.
          </motion.p>

          <motion.div
            className="vot-form-wrapper"
            initial={{ x: +50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
            exit={{ x: +50 }}>
            <div className="left-form">
              <motion.img
                src={CreateShirt}
                alt="CreateShirt"
                initial={{ scale: 1.3 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.7 } }}
                exit={{ scale: 1.3 }}
              />
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
          </motion.div>

          <motion.div
            className="vote-footer"
            initial={{ x: +50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
            exit={{ x: +50 }}>
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
          </motion.div>
        </div>
      </div>
    </SideMarginWrapper>
  );
};

export default ConfirmConstruct;
