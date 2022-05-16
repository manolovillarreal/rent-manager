import React from "react";

export const BottonNav = () => {
  return (
    <nav className="mobile-bottom-nav">
      <div className="mobile-bottom-nav__item mobile-bottom-nav__item--active">
        <div className="mobile-bottom-nav__item-content">
          <i className="material-icons">home</i>
        </div>
      </div>
      <div className="mobile-bottom-nav__item">
        <div className="mobile-bottom-nav__item-content">
          <i className="material-icons">emoji_events</i>
        </div>
      </div>
      <div className="mobile-bottom-nav__item">
        <div className="mobile-bottom-nav__item-content">
          <i className="material-icons">event</i>
        </div>
      </div>

      <div className="mobile-bottom-nav__item">
        <div className="mobile-bottom-nav__item-content">
          <i className="material-icons">account_circle</i>
        </div>
      </div>
    </nav>
  );
};
