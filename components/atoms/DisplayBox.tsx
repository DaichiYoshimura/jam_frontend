import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// ______________________________________________________
//
type Props = {
    target: string,
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => {

    const styleClass = useStyles(props);

    return (
        <Typography variant="h6" className={styleClass.root}>
            <div>in {props.target}</div>
        </Typography>
    )

};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        backgroundColor: "#003333",
        borderRadius: "5px",
        width: "80px",
        textAlign: "center"
    }
}));
// ______________________________________________________
//
export default Component;