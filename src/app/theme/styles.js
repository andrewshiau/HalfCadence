import {widerThan, devices} from './media';

// common styles

export const slantTitle = {
  fontStyle: 'italic',
  letterSpacing: '0.06em'
};

export const paddedComponent = {
  paddingTop: '2rem',
  paddingBottom: '60px',
  [widerThan(devices.mobile)]: {
    paddingBottom: '120px'
  }
};

export const lastPaddedComponent = {
  paddingTop: '2rem',
  paddingBottom: '2rem'
};
