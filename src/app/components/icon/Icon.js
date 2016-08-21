import React, {PropTypes} from 'react';
import './icon.styl';

const Icon = ({contents}) => (
  <a className="icon">{contents}</a>
);

Icon.propTypes = {
  contents: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired
};
export default Icon;
