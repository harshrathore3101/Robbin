import React from 'react'
import playstore from "../../../images/playstore.png";
import Appstore from "../../../images/Appstore.png";
import logo from "../../../images/ROBBIN.png";
import "./Footer.css"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playstore} alt="img" />
        <img src={Appstore} alt="img" />
      </div>
      <div className="midFooter">
        <img src={logo} alt="img" />
        <p>Hight Quality Is Our First Priority</p>
        <p>Copyrights 2021 &copy; Harsh rathore</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://github.com/harshrathore3101/Robbin/">Instagram</a>
        <a href="https://github.com/harshrathore3101/Robbin/">Instagram</a>
        <a href="https://github.com/harshrathore3101/Robbin/">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer