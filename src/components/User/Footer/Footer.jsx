import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="social-icons">
          <a href="/" class="fab fa-facebook"></a>
          <a href="/" class="fab fa-instagram"></a>
          <a href="/" class="fab fa-twitter"></a>
          <a href="/" class="fab fa-youtube"></a>
        </div>
        <div className="feedback">
          <a href="#">
            <h6>Give Your FeedBack</h6>
          </a>
        </div>
        <div className="agreements">
            <br />
            <a href="#" className="terms">Terms and Conditions</a>
            <br />
            <p className="disclaimer"> <span>*</span> Disclaimer: We Don't have this movies on our server we only put the link which are already available on internet</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
