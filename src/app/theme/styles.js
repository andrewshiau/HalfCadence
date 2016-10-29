import {widerThan, devices} from './media';

// common styles

export const projectTitle = {
  letterSpacing: '0.06em',
  textTransform: 'uppercase'
};

export const projectLink = {
  letterSpacing: '0.06em',
  borderBottom: '1px solid currentColor'
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
