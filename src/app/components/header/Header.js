import React, {Component} from 'react';
import radium from 'radium';
import Icon from '../icon/Icon';
import {widerThan, devices} from '../../theme/media';

import reveal, {configurations} from '../scrollReveal/reveal';

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
    letterSpacing: '.1em',
    color: 'black',
    fontWeight: '400'
  },
  navigation: {
    position: 'relative',
    padding: '2rem 0',
    zIndex: '9001',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    left: '0',
    right: '0',
    [widerThan(devices.mobile)]: {
      position: 'fixed',
      padding: '5vh 0'
    }
  }
};

class Header extends Component {
  render() {
    return (
      <nav style={styles.navigation} >
        <Icon
          style={[styles.marginRight, styles.iconTypography]}
          contents={"work"}
          linkTo={"/work"}
          />
        <Icon
          style={styles.icon}
          contents={
            <svg viewBox="0 0 8 8" width="48" height="48">
              <path fillRule="evenodd" d="M0,0 L8,0 L8,8 L0,8 L0,0 Z M1,1 L7,1 L7,7 L1,7 L1,1 Z"/>
              <path d="M2,2 L6,2 L6,6 L2,6 L2,2 Z" fill="currentColor"/>
            </svg>}
          linkTo={"/"}
          />
        <Icon
          style={[styles.marginLeft, styles.iconTypography]}
          contents={"about"}
          linkTo={"/about"}
          />
      </nav>
    );
  }
}

export default reveal(radium(Header), configurations.delayed);
