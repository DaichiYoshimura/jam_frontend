import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ListItemText } from '@material-ui/core'
import Link from '../../../atoms/Link'

// ______________________________________________________
//
type Props = {
    caption: string
    href: string
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {

    const styleClass = useStyles();

    return (
        <>
            <ListItem className={styleClass.root}>
                <AccountCircleIcon />
                <ListItemText primary={props.caption} className={styleClass.text} />
            </ListItem>
        </>
    )
};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        color: theme.palette.primary.contrastText,
        marginBottom: "3px",
        borderBottom: "3px",
        backgroundColor: theme.palette.secondary.main,
        maxHeight: "56px",
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center"
    },
    text: {
        width: '100%',
        color: theme.palette.primary.contrastText,
        paddingLeft: theme.spacing(2),

    }
}));
// ______________________________________________________
//
export default Component;