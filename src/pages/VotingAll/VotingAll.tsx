import "./VotingAll.scss";
import { votingProducts } from "@/db/votingProducts";
import ProductTopImg from "@/assets/images/For-Photo.png";
import Arrow from "@/assets/icons/Arrow.svg";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import emptystar from "@/assets/icons/star-empty.svg";
import star from "@/assets/icons/star-filled.svg";

const VotingAll = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/category-details");
  };

  return (
    <motion.div className="vottings-container">
      {/* //* Left */}
      <div className="vottings-left-wrapper">
        <div className="vottings-header-text">
          <p>Clothes</p>
          <p>Designer</p>
        </div>

        <div className="vottings-left-title">
          <div className="sub-head-box">
            <div className="spacer"></div>
            <p>Voting</p>
          </div>
          <h2>Vote For</h2>
          <h2>A New Style</h2>
          <p>Black modern style for self-confident. Challenge society, find out who is who !!!</p>
        </div>
      </div>
      {/* //* Right */}
      <div className="vottings-right-wrapper">
        <div className="right-top-box-wrapper">
          <div className="right-top-text-wrapper">
            <p>Creative user</p>
            <h3>April Winner</h3>
            <p>Description of last month's T-shirt design</p>
          </div>
          <div className="right-top-img-wrapper">
            <motion.div
              className="right-vottings-wrapper"
              initial={{ opacity: 0, x: +100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: +100 }}>
              <img src={ProductTopImg} alt="vottings-image" />
              <button>
                SEE ALL
                <img src={Arrow} alt="vottings-image" />
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="votting-category-root"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0 }}>
          <div className="vottings-wrapper">
            {votingProducts.slice(0, 3).map((product) => (
              <div className="votting-card" key={product.id}>
                <div className="votting-img-wrapper">
                  <img src={`${product.img}`} alt="img" />
                  <div className="card-inside">
                    <div className="left-starts">
                      <img src={emptystar} alt="" />
                      <img src={emptystar} alt="" />
                      <img src={emptystar} alt="" />
                      <img src={emptystar} alt="" />
                      <img src={emptystar} alt="" />
                    </div>
                    <div className="right-star">
                      <div className="top-star">
                        <img src={star} alt="" />
                        <h2>4.5</h2>
                      </div>
                      <p>56 votes</p>
                    </div>
                  </div>
                </div>
                <div className="title" onClick={handleNavigate}>
                  <div className="votting-title-left">
                    <p>{product.name}</p>
                    <h4>Style Who?</h4>
                  </div>
                  <div className="votting-title-right">
                    <p>More</p>
                    <img src={Arrow} alt="vottings-image" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="vottings-wrapper">
            {votingProducts.slice(3, 7).map((product) => (
               <div className="votting-card" key={product.id}>
               <div className="votting-img-wrapper">
                 <img src={`${product.img}`} alt="img" />
                 <div className="card-inside">
                   <div className="left-starts">
                     <img src={emptystar} alt="" />
                     <img src={emptystar} alt="" />
                     <img src={emptystar} alt="" />
                     <img src={emptystar} alt="" />
                     <img src={emptystar} alt="" />
                   </div>
                   <div className="right-star">
                     <div className="top-star">
                       <img src={star} alt="" />
                       <h2>4.5</h2>
                     </div>
                     <p>56 votes</p>
                   </div>
                 </div>
               </div>
               <div className="title" onClick={handleNavigate}>
                 <div className="votting-title-left">
                   <p>{product.name}</p>
                   <h4>Style Who?</h4>
                 </div>
                 <div className="votting-title-right">
                   <p>More</p>
                   <img src={Arrow} alt="vottings-image" />
                 </div>
               </div>
             </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VotingAll;
