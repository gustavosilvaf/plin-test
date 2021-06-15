import React from 'react';
import './styles.scss';
import { RoundedButton } from '../rounded-button';
import TagIcon from '../../static/icons/tag-icon.svg';
import PlusIcon from '../../static/icons/plus-icon.svg';
import { ShowQuickOptions } from '../show-quick-options';

export const SubHeader = () => (
    <div className="SubHeader">
        <RoundedButton icon={TagIcon} label="Tag" />
        <RoundedButton icon={PlusIcon} label="Tag" />
        <ShowQuickOptions />
        <ShowQuickOptions />
        <ShowQuickOptions />
    </div>
);
