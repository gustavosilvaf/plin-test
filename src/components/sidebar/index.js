import React, { useState } from 'react';
import {
    ProSidebar, Menu, MenuItem,
} from 'react-pro-sidebar';
import './styles.scss';
import { MENU_ITEMS } from './menu.constants';
import { IconComponent } from '../icon-component';
import ArrowOpenMenuIcon from '../../static/icons/arrow-open-menu.svg';

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(!isOpen);
    const shouldAddClass = () => (isOpen ? '--active' : '');

    return (
        <div className={`Content Content${shouldAddClass()}`}>
            <div className="Sidebar">
                <ProSidebar
                    collapsed={!isOpen}
                >
                    <Menu
                        iconShape="square"
                    >
                        {MENU_ITEMS.map(({ icon, label, active }) => (
                            <div className="Sidebar__menu-item">
                                <MenuItem
                                    icon={
                                        <IconComponent src={icon} alt={label} className="Sidebar__menu-icon" />
                                    }
                                    active={active}
                                >
                                    {label}
                                </MenuItem>
                            </div>
                        ))}

                    </Menu>

                </ProSidebar>
                <button className={`Sidebar__open-menu  Sidebar__open-menu${shouldAddClass()}`} type="button" onClick={handleClick}>
                    <IconComponent alt="Arrow Button" src={ArrowOpenMenuIcon} />
                </button>

            </div>
        </div>

    );
};
