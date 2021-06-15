import React from 'react';
import PropTypes from 'prop-types';
import { IconComponent } from '../icon-component';
import './styles.scss';

export const SquareButtonWithIcon = ({ icon, label }) => (
    <button type="button" className="SquareButtonWithIcon">
        <IconComponent src={icon} alt={label} />
    </button>
);

SquareButtonWithIcon.propTypes = {
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
};
