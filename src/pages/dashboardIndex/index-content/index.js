import React from 'react';
import './styles.scss';
import { SquareButtonWithIcon } from '../../../components/square-button-with-icon';
import PrinterIcon from '../../../static/icons/printer-icon.svg';
import FileArrowDownIcon from '../../../static/icons/file-arrow-down.svg';
import ShareIcon from '../../../static/icons/share-icon.svg';
import { DateSelector } from '../../../components/date-selector';
import { BalanceAvailable } from '../../../components/balance-available';
import { DisplayBalance } from '../../../components/display-balance';

export const IndexContent = () => (
    <div className="IndexContent">
        <div className="IndexContent__first-line">
            <h3 className="IndexContent__title">Saldo Bancário</h3>
            <div className="IndexContent__action-buttons-container">
                <SquareButtonWithIcon icon={PrinterIcon} label="Print" />
                <SquareButtonWithIcon icon={FileArrowDownIcon} label="Print" />
                <SquareButtonWithIcon icon={ShareIcon} label="Print" />
            </div>
        </div>
        <div className="IndexContent__first-block">
            <DateSelector />
            <BalanceAvailable />
            <DisplayBalance />
        </div>
    </div>
);
