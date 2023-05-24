import React, { useState } from "react";
import PropTypes from "prop-types";
import Hamburger from "./Hamburger";
import { NotificationBell } from "./svgindex";

const TopBar = ({ img, isMobile, logoUrl, onLogout, toggleSidebar, ulb, userDetails, notificationCount, notificationCountLoaded, cityOfCitizenShownBesideLogo, onNotificationIconClick, hideNotificationIconOnSomeUrlsWhenNotLoggedIn }) => {
  return (
    <div className="navbar" style={{margin: '-50px 10px 10px -15px'}}>
      <div className="center-container">
        {isMobile && <Hamburger handleClick={toggleSidebar} />}
        <img
          className="city"
          id="topbar-logo" 
          src={"https://live.staticflickr.com/65535/52920926187_23343e8ece_m.jpg"}
          alt="mSeva"
        />
        <h3>{cityOfCitizenShownBesideLogo}</h3>
        <div className="RightMostTopBarOptions">
          {!hideNotificationIconOnSomeUrlsWhenNotLoggedIn ? <div className="EventNotificationWrapper" onClick={onNotificationIconClick}>
            { notificationCountLoaded && notificationCount ? <span><p>{notificationCount}</p></span> : null }
            <NotificationBell />
          </div> : null}
        </div>
      </div>
    </div>
  );
};

TopBar.propTypes = {
  img: PropTypes.string,
};

TopBar.defaultProps = {
  img: undefined,
};

export default TopBar;
