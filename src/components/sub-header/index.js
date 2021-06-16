import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { RoundedButton } from '../rounded-button';
import TagIcon from '../../static/icons/tag-icon.svg';
import PlusIcon from '../../static/icons/plus-icon.svg';
import { ShowQuickOptions } from '../show-quick-options';

export const SubHeader = ({ balance }) => (
    <div className="SubHeader">
        <RoundedButton icon={TagIcon} label="Tag" />
        <RoundedButton icon={PlusIcon} label="Tag" />
        <ShowQuickOptions label="Principal" balance={balance.main} />
        <ShowQuickOptions label="Aluguel" balance={balance.rent} className="RentBackground" />
        <ShowQuickOptions label="Alimentação" balance={balance.food} className="FoodBackground" />
    </div>
);

SubHeader.propTypes = {
    balance: PropTypes.shape({
        main: PropTypes.number.isRequired,
        rent: PropTypes.number.isRequired,
        food: PropTypes.number.isRequired,
    }).isRequired,
};
