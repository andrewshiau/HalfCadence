import React, {PropTypes} from 'react';
import {Link as RRLink} from 'react-router';
import radium from 'radium';

// https://github.com/FormidableLabs/radium/tree/master/docs/faq
// wrap link to apply radium styles to it
const RadiumLink = radium(RRLink);

const Link = ({style, contents, linkTo = "/"}) => (
  <RadiumLink style={style} className="icon" to={linkTo}>
    {contents}
  </RadiumLink>
);

Link.propTypes = {
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

export default radium(Link);
