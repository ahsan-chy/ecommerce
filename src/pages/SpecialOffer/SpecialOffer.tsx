import PaginationArrows from "@/components/PaginationArrows/PaginationArrows";
import "./SpecialOffer.scss";
import bucket from "@/assets/icons/bucket.svg";
import wishlist from "@/assets/icons/white-wishlist.svg";
import arrow from "@/assets/icons/arrow-white-small.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { specialOfferData } from "@/db/specialOffer";
import { useState } from "react";

const SpecialOffer = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === specialOfferData.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? specialOfferData.length - 1 : prevIndex - 1));
  };

  // Calculate previous and next indices
  const prevIndex = (currentIndex - 1 + specialOfferData.length) % specialOfferData.length;
  const nextIndex = (currentIndex + 1) % specialOfferData.length;

  // Get previous, current, and next data
  const prevData = specialOfferData[prevIndex];
  const currentData = specialOfferData[currentIndex];
  const nextData = specialOfferData[nextIndex];

  return (
    <div className="offer-root">
      <div className="offer-left">
        <div className="top-wrapper">
          <div className="offer-header-text">
            <p>Clothes</p>
            <p>Designer</p>
          </div>
        </div>
        <div className="offer-left-title">
          <motion.div
            className="offer-wrap"
            initial={{ opacity: 0, y: +100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, y: +100 }}>
            <h1>Special Offer</h1>
            <p>
              New collections at a special price. Only the first two weeks since the appearance of
              the collection is a special offer.
            </p>
          </motion.div>
          <motion.div
            className="offer-pagination"
            initial={{ opacity: 0, y: +100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
            exit={{ opacity: 0, y: +100 }}>
            <PaginationArrows current={0} length={30} />
          </motion.div>
        </div>
      </div>

      <div className="offer-right">
        <div className="offer-row">
          {specialOfferData.map((data) => (
            <motion.div
              className="offer-column desktop-special-offer"
              key={data.id}
              style={{ backgroundImage: `url(${data.image})` }}
              initial={{ opacity: 0, x: "40%" }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: "40%" }}>
              <div className="offer-footer offer-first">
                <div className="offer-content">
                  <p>{data.subTitle}</p>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                </div>
                <div className="offer-overlay"></div>
                <div className="hovered-offer">
                  <div className="offer-icons-wrapper">
                    <div className="icon-row">
                      <img src={bucket} alt="bucket" />
                    </div>
                    <div className="icon-row">
                      <img src={wishlist} alt="wishlist" />
                    </div>
                    <div className="icon-row" onClick={() => navigate("/special-product")}>
                      <img src={arrow} alt="arrow" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
            className="offer-column mobile-special-offer prev-slide">
            <div
              className="offer-footer offer-first"
              style={{ backgroundImage: `url(${prevData.image})` }}></div>
          </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0 }}
              className="offer-column mobile-special-offer"
              key={currentData.id}>
              <div
                className="offer-footer offer-first"
                style={{ backgroundImage: `url(${currentData.image})` }}>
                <div className="offer-content">
                  <p>{currentData.subTitle}</p>
                  <h3>{currentData.title}</h3>
                  <p>{currentData.description}</p>
                </div>
                <div className="offer-overlay"></div>
                <div className="hovered-offer">
                  <div className="offer-icons-wrapper">
                    <div className="icon-row">
                      <img src={bucket} alt="bucket" />
                    </div>
                    <div className="icon-row">
                      <img src={wishlist} alt="wishlist" />
                    </div>
                    <div className="icon-row" onClick={() => navigate("/special-product")}>
                      <img src={arrow} alt="arrow" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
            className="offer-column mobile-special-offer next-slide">
            <div
              className="offer-footer offer-first"
              style={{ backgroundImage: `url(${nextData.image})` }}></div>
          </motion.div>
        </div>
      </div>
      <div className="mobile-pagination-offer">
        <PaginationArrows
          onPrev={prevSlide}
          onNext={nextSlide}
          current={currentIndex}
          length={specialOfferData.length - 1}
        />
      </div>
    </div>
  );
};

export default SpecialOffer;
