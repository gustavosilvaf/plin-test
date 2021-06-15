import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { formatBalance } from '../../wrappers/formatNumbers';

export const HeaderBalance = ({ balance }) => (
    <div className="HeaderBalance">
        <div className="HeaderBalance__title-container">
            <p className="HeaderBalance__title">Saldo</p>
        </div>
        <p className="HeaderBalance__balance">{formatBalance(balance)}</p>
    </div>
);

HeaderBalance.propTypes = {
    balance: PropTypes.number.isRequired,
};
