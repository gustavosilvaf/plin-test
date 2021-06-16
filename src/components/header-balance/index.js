import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { formatBalance } from '../../wrappers/formatNumbers';
import HideIcon from '../../static/icons/hide-icon.svg';
import { IconComponent } from '../icon-component';

export const HeaderBalance = ({ balance }) => {
    const [balanceIsVisible, setBalanceIsvisible] = useState(true);
    const handleClick = () => setBalanceIsvisible(!balanceIsVisible);
    return (
        <div className="HeaderBalance">
            <div className="HeaderBalance__title-container">
                <p className="HeaderBalance__title">Saldo</p>
                <button type="button" onClick={handleClick}>
                    <div className="HeaderBalance__icon-container">
                        <IconComponent src={HideIcon} alt="Hide icon" />
                    </div>
                </button>
            </div>
            <p className={`HeaderBalance__balance HeaderBalance__balance${balanceIsVisible ? '' : '--inactive'}`}>{formatBalance(balance)}</p>
        </div>
    );
};

HeaderBalance.propTypes = {
    balance: PropTypes.number.isRequired,
};
