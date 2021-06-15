import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import Select from 'react-dropdown-select';
import CopyIcon from '../../static/icons/copy-icon.svg';
import './styles.scss';
import { ACCOUNT_TYPES } from '../../wrappers/account';

export const CurrentAccountData = ({ agency, account, accountType }) => {
    const elToCopy = `Ag. ${agency} ${accountType} ${account}`;
    const options = [
        {
            accountType: 'CC',
            agency: '0001',
            account: '43526-0',
        },
        {
            accountType: 'CC',
            agency: '0001',
            account: '43526-0',
        },
    ];

    return (
        <div className="CurrentAccountData">
            <StyledSelect
                options={options}
                values={[]}
                placeholder={ACCOUNT_TYPES[accountType]}
                itemRenderer={({ item }) => (
                    <StyledItem>
                        <div className="StyledItem">

                            {ACCOUNT_TYPES[item.accountType]}

                            <div className="StyledItem__info">
                                <p className="StyledItem__numbers">Ag. {item.agency}</p>

                                <p className="StyledItem__numbers">{item.accountType} {item.account}</p>
                            </div>
                        </div>

                    </StyledItem>
                )}
            />
            <div className="CurrentAccountData__data-container">
                <p className="CurrentAccountData__data-info">Ag. {agency}</p>

                <p className="CurrentAccountData__data-info">{accountType}.{account}</p>
                <button type="button">
                    <CopyToClipboard text={elToCopy}>
                        <img src={CopyIcon} alt="" />
                    </CopyToClipboard>
                </button>

            </div>
        </div>
    );
};

CurrentAccountData.propTypes = {
    agency: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
    accountType: PropTypes.string.isRequired,
};

const StyledItem = styled.div`
  padding: 10px;
  color: #555;
  border-radius: 3px;
  margin: 3px;
  cursor: pointer;
  > div {
    display: flex;
    align-items: center;
  }
  input {
    margin-right: 10px;
  }
  :hover {
    background: #f2f2f2;
  }
`;

const StyledSelect = styled(Select)`
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    width: fit-content !important;
    
    .react-dropdown-select-dropdown {
        width: max-content !important;
        border-radius: 5px;
    }

    
    :hover, .css-wmw4vi-ReactDropdownSelect:focus-within {
        border: none;
        box-shadow: none !important;
    }
    
    .react-dropdown-select-input {
        margin-left: 0 !important;
    }

`;
