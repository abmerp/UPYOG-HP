import React, { useState } from "react";
import PropTypes from "prop-types";
import { NotificationBell } from "./svgindex";

const OpenLinkContainer = ({ img,}) => {
  return (
    <div className="navbar">
      <div className="center-container" >
        <img
          className="city"
          id="topbar-logo" 
          crossOrigin="anonymous"
          src={"http://www.ud.hp.gov.in/sites/default/files/logo.png"}
          alt="mSeva"
        />
      </div>
    </div>
  );
};

OpenLinkContainer.propTypes = {
  img: PropTypes.string,
};

OpenLinkContainer.defaultProps = {
  img: "http://www.ud.hp.gov.in/sites/default/files/logo.png",
};

export default OpenLinkContainer;