import React from 'react';
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
// ______________________________________________________
//
type Props = {
    status: boolean
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => {

    const styleClass = useStyles(props);
    const [state, setState] = React.useState({
        checked: props.status,
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <Switch
            className={styleClass.root}
            checked={state.checked}
            onChange={handleChange}
            name="checked"
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
    );

};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
    }
}));
// ______________________________________________________
//
export default Component;