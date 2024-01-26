import "./SpecialProductMenu.scss";

const SpecialProductMenu = () => {
  return (
    <div className="product-menu-wrapper">
      <div className="varients">
        <div className="row">
          <div className="col">
            <h6>Color</h6>
            <ul className="color-wrapper">
              <li>
                <div className="color-box"></div>
              </li>
              <li>
                <div className="color-box"></div>
              </li>
              <li>
                <div className="color-box"></div>
              </li>
            </ul>
          </div>
          <div className="col">
            <h6>Size</h6>
            <ul>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>2XL</li>
            </ul>
          </div>
        </div>
        <h2>$52.99</h2>
      </div>
      <button>BUY NOW</button>
    </div>
  );
};

export default SpecialProductMenu;
