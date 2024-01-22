import "./AboutUs.scss";
import team from "@/assets/images/team.png";
import team2 from "@/assets/images/team2.png";
import team3 from "@/assets/images/team3.png";
import team4 from "@/assets/images/team4.png";
import team5 from "@/assets/images/team5.png";
import team6 from "@/assets/images/team6.png";

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <div className="top-wrapper">
        <div className="about-header-text">
          <p>Clothes</p>
          <p>Designer</p>
        </div>
      </div>
      <div className="about-box">
        <div className="about-left">
          <div className="products-left-title">
            <h1>About Us</h1>
            <p>
              Collection of youth elongated T-shirts with cuffs on the sleeves. Style that will give
              you confidence in a big city.{" "}
            </p>
          </div>
        </div>
        <div className="about-right">
          <h3>Help & FAQ</h3>
          <p>
            Basic information about us, our production, methods of payment and delivery, warranty
            conditions
          </p>

          <div className="sub-menus-wrapper">
            <div className="sub-menu-col">
              <span>About Us</span>
            </div>
            <div className="sub-menu-col">
              <span>Voting</span>
            </div>
            <div className="sub-menu-col">
              <span>Constructor</span>
            </div>
            <div className="sub-menu-col">
              <span>Delivery</span>
            </div>
            <div className="sub-menu-col">
              <span>Payment</span>
            </div>
            <div className="sub-menu-col">
              <span>Return</span>
            </div>
            <div className="sub-menu-col">
              <span>Contacts</span>
            </div>
          </div>

          <div className="our-team">
            <div className="team-left">
              <h3>Our Team</h3>
              <p>
                Lorem ipsum dolor sit amet, ei veniam aperiam vel. Evertitur suscipiantur in cum. Ad
                sint autem eos, ei pri vide honestatis, iriure inimicus pertinacia an sit. Per
                bonorum inciderint cu, cu minimum forensibus adversarium pri, ut agam civibus eos.
                Te usu omnis percipit definitiones, pro nibh molestiae et, ei mel
              </p>

              <div className="team-images-wrapper">
                <div className="team-card">
                  <img src={team} alt="team" />
                  <h6>John Doe</h6>
                  <p>Designer </p>
                </div>
                <div className="team-card">
                  <img src={team2} alt="team" />
                  <h6>John Doe</h6>
                  <p>Designer </p>
                </div>
                <div className="team-card">
                  <img src={team3} alt="team" />
                  <h6>John Doe</h6>
                  <p>Designer </p>
                </div>
                <div className="team-card">
                  <img src={team4} alt="team" />
                  <h6>John Doe</h6>
                  <p>Designer </p>
                </div>
                <div className="team-card">
                  <img src={team5} alt="team" />
                  <h6>John Doe</h6>
                  <p>Designer </p>
                </div>
                <div className="team-card">
                  <img src={team6} alt="team" />
                  <h6>John Doe</h6>
                  <p>Designer </p>
                </div>
              </div>
            </div>
            <div className="team-right">
              <div className="our-team-img-wrapper">
                <div className="circle-box"></div>
                <h6>How We Do It</h6>
                <p>From idea to implementation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
