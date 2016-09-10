// common styles

import {narrowerThan, devices} from './media';

export const visibleLarge = {
  [narrowerThan(devices.mobile)]: {
    display: 'none'
  }
};

export const slantTitle = {
  fontStyle: 'italic',
  letterSpacing: '0.06em'
};
