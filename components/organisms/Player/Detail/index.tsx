import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ModalButton from './Modal'
import Typography from '@material-ui/core/Typography'
import PersonIcon from '@material-ui/icons/Person';
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import { PlayerType } from '../../../../interfaces'

// ______________________________________________________
//
type Props = {
    data: PlayerType,
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = (props) => {

    const styleClass = useStyles(props);
    const tuneList = props.data.performedTunes.map(val => (<li>{val}</li>));

    return (
        <div className={styleClass.back}>
            <div className={styleClass.root}>
                <div className={styleClass.subtitleBack}>
                    <div>
                        <PersonIcon />
                    </div>
                    <div className={styleClass.subtitle}>
                        <Typography variant="h5">
                            Profile
                        </Typography>
                    </div>
                    <div className={styleClass.editButtonBack}>
                        <div className={styleClass.editButton}>
                            <ModalButton caption="Edit" />
                        </div>
                    </div>
                </div>
                <Typography variant="h6" gutterBottom className={styleClass.typography}>
                    Name : {props.data.name}
                </Typography>
                <Typography variant="h6" gutterBottom className={styleClass.typography}>
                    Part : {props.data.part}
                </Typography>
                <div className={styleClass.subtitleBack}>
                    <div>
                        <MusicNoteIcon />
                    </div>
                    <div className={styleClass.subtitle}>
                        <Typography variant="h5">
                            Performed Tunes
                        </Typography>
                    </div>
                </div>
                <Typography variant="h6" gutterBottom className={styleClass.typography}>
                    {tuneList}
                </Typography>
            </div>
        </div>
    )
};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
    back: {
        backgroundColor: theme.palette.secondary.main,
        height: "1200px"
    },
    root: {
        color: theme.palette.primary.contrastText,
        width: '100%',
    },
    subtitleBack: {
        display: 'flex',
        alignItems: "flex-end",
        padding: theme.spacing(3),
    },
    subtitle: {
        paddingLeft: theme.spacing(2)
    },
    typography: {
        paddingLeft: theme.spacing(8),
        color: theme.palette.primary.contrastText,
    },
    editButtonBack: {
        paddingLeft: theme.spacing(2),
        display: 'flex',
        justifyContent: "space-around",
        verticalAlign: "middle",
    },
    editButton: {
        width: '80%',
    }
}));
// ______________________________________________________
//
export default Component;