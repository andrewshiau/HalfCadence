import React, {Component} from 'react';
import radium from 'radium';
import Link from '../link/Link';
import {widerThan, devices} from '../../theme/media';

import reveal, {configurations} from '../scrollReveal/reveal';
import anchor from '../scrollReveal/anchor';

const styles = {
  icon: {
    color: 'black',
    userSelect: 'none',
    lineHeight: '0',
    pointerEvents: 'auto'
  },
  marginLeft: {
    marginLeft: '6rem'
  },
  marginRight: {
    marginRight: '6rem'
  },
  iconTypography: {
    fontStyle: 'italic',
    letterSpacing: '.1em',
    fontWeight: '400'
  },
  navigation: {
    pointerEvents: 'none',
    position: 'relative',
    padding: '2rem 0 0',
    zIndex: '9001',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    left: '0',
    right: '0',
    [widerThan(devices.mobile)]: {
      position: 'fixed',
      padding: '5vh 0 0'
    }
  }
};

const WorkLink = () => (
  <Link
    style={[styles.marginRight, styles.icon, styles.iconTypography]}
    contents={"work"}
    linkTo={"/work"}
    />
);

const HomeLink = () => (
  <Link
    style={styles.icon}
    contents={
      <svg viewBox="0 0 8 8" width="48" height="48">
        <path fillRule="evenodd" d="M0,0 L8,0 L8,8 L0,8 L0,0 Z M1,1 L7,1 L7,7 L1,7 L1,1 Z"/>
        <path d="M2,2 L6,2 L6,6 L2,6 L2,2 Z" fill="currentColor"/>
      </svg>}
    linkTo={"/"}
    />
);

const AboutLink = () => (
  <Link
    style={[styles.marginLeft, styles.icon, styles.iconTypography]}
    contents={"about"}
    linkTo={"/about"}
    />
);

class Header extends Component {
  render() {
    return (
      <nav style={styles.navigation}> <WorkLink/> <HomeLink/> <AboutLink/> </nav>
    );
  }
}

// apply scroll reveal,
// then anchor so that scroll events know where to scroll to
export default anchor(
  reveal(
    radium(Header),
    configurations.delayed),
  "header");
