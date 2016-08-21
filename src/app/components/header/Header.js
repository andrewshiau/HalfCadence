import React from 'react';
import Icon from '../icon/Icon';
import './header.styl';

const Header = () => (
  <nav className="navigation container visible-large">
    <div className="row">
      <div className="column column-10 column-offset-35 hc-center">
        <Icon contents={"work"}/>
      </div>
      <div className="column column-10 hc-center">
        <Icon
          contents={
            <svg viewBox="0 0 8 8" width="48" height="48" className="icon">
              <path fillRule="evenodd" d="M0,0 L8,0 L8,8 L0,8 L0,0 Z M1,1 L7,1 L7,7 L1,7 L1,1 Z"/>
              <path d="M2,2 L6,2 L6,6 L2,6 L2,2 Z" fill="currentColor"/>
            </svg>}
          />
      </div>
      <div className="column column-10 hc-center">
        <Icon contents={"about"}/>
      </div>
    </div>
  </nav>
);
export default Header;
