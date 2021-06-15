import React from 'react';
import {
    FormControl, InputLabel,
    makeStyles, MenuItem, Select,
} from '@material-ui/core';
// import { IconComponent } from '../icon-component';
// import ArrowDownIcon from '../../static/icons/arrow-down-icon.svg';

export const DateSelector = () => {
    const useStyles = makeStyles(() => ({
        select: {
            paddingTop: '25px',
            paddingLeft: 10,
            width: 280,
            height: 50,
            border: '0.5px solid #E5E4E2',
            borderRadius: '5px 5px 0 0',
        },
        label: {
            fontSize: 12,
            marginLeft: 10,
            fontFamily: '\'Lato\', sans-serif',
            color: '#622EE5',
        },

    }));

    const classes = useStyles();

    return (
        <FormControl>
            <InputLabel className={classes.label} htmlFor="age-native-simple">Data do saldo</InputLabel>

            <Select
                value=""
                displayEmpty
                className={classes.select}
                inputProps={{
                    'aria-label': 'Without label',

                }}
            >
                <MenuItem value="" disabled>
                    07/12/2020
                </MenuItem>
            </Select>
        </FormControl>

    );
};
