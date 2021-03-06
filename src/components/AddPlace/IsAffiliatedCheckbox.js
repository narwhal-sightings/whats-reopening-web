import React, { useContext } from 'react';
import { AddPlaceContext } from './context'; 
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function IsAffiliatedCheckbox() {
    const context = useContext(AddPlaceContext); 
    const handleChange = (e) => context.updateIsAffiliated(e.target.checked);

    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={context.isAffiliated}
                        onChange={handleChange}
                        color="primary"
                    />
                }
                label="I am affiliated with this place."
            />
            <FormHelperText>For example, if you're the business the owner, an employee, or a contractor, then you are affiliated with the place.</FormHelperText>
        </div>
    )
}