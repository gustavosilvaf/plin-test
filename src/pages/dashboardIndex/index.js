import React, { useState } from 'react';
import './styles.scss';
import { SubHeader } from '../../components/sub-header';
import { IndexContent } from './index-content';
import { DashboardTemplate } from '../../wrappers/dashboard-template';
import { userMock } from '../../mocks/user-mock';

export const Index = () => {
    const [user] = useState(userMock);
    const { accountWallet } = user;
    return (
        <DashboardTemplate
            accountWallet={accountWallet}
        >
            <SubHeader balance={accountWallet.dividers} />
            <IndexContent />
        </DashboardTemplate>
    );
};
