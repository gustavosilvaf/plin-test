import React from 'react';
import './styles.scss';
import SearchIcon from '../../static/icons/search-icon.svg';

export const Search = () => (
    <div className="Search">
        <input
            className="Search__input"
            type="text"
            placeholder="Pesquisar"
        />
        <img className="Search__icon" src={SearchIcon} alt="" />
    </div>
);
