import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="social-icons">
          <a href="facebook.com" class="fab fa-facebook">  </a>
          <a href="instagram.com" class="fab fa-instagram">  </a>
          <a href="twitter.com" class="fab fa-twitter">  </a>
          <a href="youtube.com" class="fab fa-youtube">  </a>
        </div>
        <div className="feedback">
          <a href="/feedback">
            <h6>Give Your FeedBack</h6>
          </a>
        </div>
        <div className="agreements">
            <br />
            <a href="/terms" className="terms">Terms and Conditions</a>
            <br />
            <p className="disclaimer"> <span>*</span> Disclaimer: We Don't have this movies on our server we only put the link which are already available on internet</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
