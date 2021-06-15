import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';

export const DashboardTemplate = ({ children, accountWallet }) => (
    <div className="DashboardTemplate">
        <Header accountWallet={accountWallet} />
        <Sidebar />
        <div className="DashboardTemplate__body-content">
            {children}
        </div>
    </div>
);

DashboardTemplate.propTypes = {
    children: PropTypes.node.isRequired,
    accountWallet: PropTypes.shape({}).isRequired,
};
