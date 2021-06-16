import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { IconComponent } from '../icon-component';

export const RoundedButton = ({ icon, label }) => (
    <button type="button" className="RoundedButton">
        <IconComponent src={icon} alt={label} className="RoundedButton__icon" />
    </button>
);

RoundedButton.propTypes = {
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
};
