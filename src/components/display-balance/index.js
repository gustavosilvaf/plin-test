import React from 'react';
import { IconComponent } from '../icon-component';
import './styles.scss';
import ShieldIcon from '../../static/icons/shield-icon.svg';
import HideIcon from '../../static/icons/hide-icon.svg';

export const DisplayBalance = () => (
    <div className="DisplayBalance">
        <div className="DisplayBalance__left-container">
            <IconComponent src={ShieldIcon} alt="Shield icon" />
            <div className="DisplayBalance__balance-available">
                <p className="DisplayBalance__subtitle">
                    Saldo disponível
                </p>
                <p className="DisplayBalance__balance">
                    R$40.000,00
                </p>
            </div>
        </div>
        <IconComponent alt="Ocultar" src={HideIcon} />
    </div>
);
