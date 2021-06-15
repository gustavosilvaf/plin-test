import React from 'react';
import PropTypes from 'prop-types';

export const IconComponent = ({ src, alt }, props) => <img src={src} alt={alt} {...props} />;

IconComponent.propTypes = {
    src: PropTypes.node.isRequired,
    alt: PropTypes.string.isRequired,
};
