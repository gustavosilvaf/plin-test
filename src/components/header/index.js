import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../static/logo.svg';
import Divider from '../../static/icons/divider.svg';

import './styles.scss';
import { CurrentAccountData } from '../current-account-data';
import { HeaderBalance } from '../header-balance';
import { HeaderSearch } from '../header-search';
import { HeaderToolActions } from '../header-tool-actions';
import { HeaderAvatar } from '../header-avatar';

export const Header = ({ accountWallet }) => {
    const {
        account, agency, accountType, accountBalance,
    } = accountWallet;
    return (
        <div className="Header">
            <div className="Header__left-container">
                <img src={Logo} alt="" className="Header__logo" />
                <img src={Divider} alt="" className="Header__divider" />
                <CurrentAccountData
                    agency={agency}
                    account={account}
                    accountType={accountType}
                />
                <HeaderBalance
                    balance={accountBalance}
                />
            </div>
            <div className="Header__right-container">
                <HeaderSearch />
                <HeaderToolActions />
                <HeaderAvatar />
            </div>
        </div>
    );
};

Header.propTypes = {
    accountWallet: PropTypes.shape({
        account: PropTypes.string.isRequired,
        agency: PropTypes.string.isRequired,
        accountType: PropTypes.string.isRequired,
        accountBalance: PropTypes.number.isRequired,
    }).isRequired,
};
