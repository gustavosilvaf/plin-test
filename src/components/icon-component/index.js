import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export const IconComponent = ({ src, alt, className }, props) => <img className={`IconComponent ${className}`} src={src} alt={alt} {...props} />;

IconComponent.propTypes = {
    src: PropTypes.node.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
};

IconComponent.defaultProps = {
    className: '',
};
