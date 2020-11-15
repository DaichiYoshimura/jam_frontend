import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { NextComponentType, NextPageContext } from 'next';
import Button from '@material-ui/core/Button';
import Link from '../atoms/Link'
// ______________________________________________________
//
type Props = {
    className?: any,
    disabled?: any,
    caption: string,
    href?: string,
    onClick?: any
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                //component={Link}
                href={props.href}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.caption}
            </Button>
        </div>
    );

};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        paddingTop: theme.spacing(2),
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: '100%'
    }
}));
// ______________________________________________________
//
export default Component;

