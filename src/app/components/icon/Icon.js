import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import radium from 'radium';

const RadiumLink = radium(Link);
const Icon = ({style, contents, linkTo = "/"}) => (
  /* <a href="#create" style={style} className="icon">{contents}</a> */
  <RadiumLink style={style} className="icon" to={linkTo}>
    {contents}
  </RadiumLink>
);

Icon.propTypes = {
  contents: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  linkTo: PropTypes.string
};

export default radium(Icon);
