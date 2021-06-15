import React from 'react';
import ChatIcon from '../../static/icons/chat-icon.svg';
import CalendarIcon from '../../static/icons/calendar-icon.svg';
import NotifyIcon from '../../static/icons/notify-icon.svg';
import './styles.scss';

export const HeaderToolActions = () => (
    <div className="HeaderToolActions">
        <img className="HeaderToolActions__icons" src={ChatIcon} alt="" />
        <img className="HeaderToolActions__icons" src={CalendarIcon} alt="" />
        <img className="HeaderToolActions__icons" src={NotifyIcon} alt="" />
    </div>
);
