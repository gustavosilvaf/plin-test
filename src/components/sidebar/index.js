import React from 'react';
import {
    ProSidebar, Menu, MenuItem,
} from 'react-pro-sidebar';
import './styles.scss';
import { MENU_ITEMS } from './menu.constants';
import { IconComponent } from '../icon-component';

export const Sidebar = () => (
    <div className="Sidebar">
        <ProSidebar
            collapsed
        >
            <Menu
                iconShape="square"
            >
                {MENU_ITEMS.map(({ icon, label, active }) => (
                    <div className="Sidebar__menu-item">
                        <MenuItem
                            icon={
                                <IconComponent src={icon} alt={label} />
                            }
                            active={active}
                        >
                            {label}
                        </MenuItem>
                    </div>
                ))}

            </Menu>
        </ProSidebar>
    </div>

);
