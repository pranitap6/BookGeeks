import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InfoIcon from "@material-ui/icons/Info";
function Footer() {
  return (
    <div className="social-row container">
      <div className="icon-style">
        <a href="https://www.linkedin.com/in/pranita-patel/" alt=" ">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/pranitap6" alt=" ">
          <GitHubIcon />
        </a>
        <a href="https://www.facebook.com/pranita.patel.9" alt="">
          <FacebookIcon />
        </a>
        <a href="https://pranitap6.github.io/I-Am-Pranita-Patel/" alt="">
          <InfoIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
