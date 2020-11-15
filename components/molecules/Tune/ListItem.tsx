import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import ListItemText from '../../atoms/ListItemText'
import DisplayBox from '../../atoms/DisplayBox'
import Link from '../../atoms/Link'
// ______________________________________________________
//
type Props = {
    id: string,
    primary: string,
    playing_key: string,
    status: boolean,
    href: string,
    onClick?: any
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => {
    const styleClass = useStyles(props);
    return (
        <ListItem key={props.id} className={useStyles(props).root}>
            <MusicNoteIcon />
            <Link href={props.href} className={styleClass.text}>
                <ListItemText
                    primary={props.primary}
                />
            </Link>
            <DisplayBox target={props.playing_key} />
        </ListItem>
    );
};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        color: "white",
        marginBottom: "3px",
        borderBottom: "3px",
        borderBottomColor: "white",
        backgroundColor: "slategray",
        maxHeight: "56px"
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