import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { NextComponentType, NextPageContext } from 'next';
import TextField from '@material-ui/core/TextField';
// ______________________________________________________
//
type Props = {
    id: string,
    label: string
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => {

    const classes = useStyles();

    return (
        <div className={classes.back}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id={props.id} label={props.label} variant="outlined" className={classes.textField} />
            </form>
        </div>
    );
};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
    back: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    root: {
        width: "100%",
        padding: theme.spacing(2)
    },
    textField: {
        width: "100%"
    }
}));
// ______________________________________________________
//
export default Component;
