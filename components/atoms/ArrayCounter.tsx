import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// ______________________________________________________
//
type Props = {
    target: Array<string>,
    className?: any
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => {

    const styleClass = useStyles(props);
    const target_array: Array<string> = props.target;
    const count = target_array.length;

    return (
        <Typography variant="h6" className={styleClass.root}>
            <div>{count}</div>
        </Typography>
    );

};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        borderRadius: "5px",
        width: "100px",
        textAlign: "center"
    },
}));
// ______________________________________________________
//
export default Component;