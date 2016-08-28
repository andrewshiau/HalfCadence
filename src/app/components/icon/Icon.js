import React, {PropTypes} from 'react';
import radium from 'radium';

const Icon = ({style, contents}) => (
  <a style={style} className="icon">{contents}</a>
);

Icon.propTypes = {
  contents: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
};

export default radium(Icon);
