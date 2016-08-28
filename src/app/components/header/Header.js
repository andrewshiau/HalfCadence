import React from 'react';
import Icon from '../icon/Icon';

const styles = {
  icon: {
    color: 'black',
    userSelect: 'none',
    lineHeight: '0',
    fontWeight: '500'
  },
  marginLeft: {
    marginLeft: '6rem'
  },
  marginRight: {
    marginRight: '6rem'
  },
  iconTypography: {
    fontStyle: 'italic',
    letterSpacing: '.1em'
  },
  navigation: {
    position: 'fixed',
    paddingTop: '5vh',
    zIndex: '9001',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    left: '0',
    right: '0'
  }
};

const Header = () => (
  <nav style={styles.navigation}>
    <Icon
      style={[styles.marginRight, styles.marginLeft, styles.iconTypography]}
      contents={"work"}
      />
    <Icon
      style={styles.icon}
      contents={
        <svg viewBox="0 0 8 8" width="48" height="48">
          <path fillRule="evenodd" d="M0,0 L8,0 L8,8 L0,8 L0,0 Z M1,1 L7,1 L7,7 L1,7 L1,1 Z"/>
          <path d="M2,2 L6,2 L6,6 L2,6 L2,2 Z" fill="currentColor"/>
        </svg>}
      />
    <Icon
      style={[styles.marginLeft, styles.iconTypography]}
      contents={"about"}
      />
  </nav>
);

export default Header;
