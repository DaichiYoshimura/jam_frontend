import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import PersonIcon from '@material-ui/icons/Person';
import Link from '../../atoms/Link'
import ListItemText from '../../atoms/ListItemText'
import Switch from '../../atoms/Switch'
import ArrayCounter from '../../atoms/ArrayCounter'

// ______________________________________________________
//
type Props = {
    id: string,
    primary: string,
    secondary: string,
    performedTunes: Array<string>,
    status: boolean,
    href: string,
};
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => {

    const styleClass = useStyles(props);
    const performedTunes: Array<string> = props.performedTunes

    return (
        <ListItem key={props.id} className={styleClass.root}>
            <PersonIcon />
            <Link href={props.href} className={styleClass.text}>
                <ListItemText
                    primary={props.primary}
                    secondary={props.secondary}
                />
            </Link>
            <ArrayCounter target={performedTunes} />
            <Switch status={props.status} />
        </ListItem>
    );
};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        color: theme.palette.primary.contrastText,
        borderBottomColor: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        maxHeight: "56px",
        paddingLeft: theme.spacing(2),
    },
    text: {
        width: "100%",
        paddingLeft: theme.spacing(2),
        color: theme.palette.primary.contrastText
    }

}));
// ______________________________________________________
//
export default Component;