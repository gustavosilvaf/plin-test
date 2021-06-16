import React, { useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { formatBalance } from '../../wrappers/formatNumbers';
import { IconComponent } from '../icon-component';
import HideIcon from '../../static/icons/hide-icon.svg';

export const ShowQuickOptions = ({ label, balance, className }) => {
    const [initial] = label;

    const [isVisible, setIsVisible] = useState(true);
    const handleClick = () => setIsVisible(!isVisible);

    return (
        <div className="ShowQuickOptions">
            <div className={`ShowQuickOptions__initial ${className}`}>
                {initial}
            </div>
            <div className="ShowQuickOptions__content">
                <div className="ShowQuickOptions__first-line">
                    <p className="ShowQuickOptions__title">{label}</p>
                    <button type="button" onClick={handleClick}>
                        <IconComponent
                            className="ShowQuickOptions__icon-container"
                            alt="HideIcon"
                            src={HideIcon}
                        />
                    </button>
                </div>
                <p
                    className={
                        `ShowQuickOptions__balance 
                        ShowQuickOptions__balance${isVisible ? '' : '--inactive'}`
                    }
                >{formatBalance(balance)}
                </p>
            </div>
        </div>
    );
};

ShowQuickOptions.propTypes = {
    label: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    className: PropTypes.string,
};

ShowQuickOptions.defaultProps = {
    className: '',
};
