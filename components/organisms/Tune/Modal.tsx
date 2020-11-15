import React from 'react';
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Modal, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import { PlayerType } from '../../../interfaces';
import CreateForm from './CreateForm'

// ______________________________________________________
//
type Props = {
    data: PlayerType[],
    roomId: string
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => {

    const styleClass = useStyles(props);

    const [modalStyle] = React.useState({
        top: `${50}%`,
        left: `${50}%`,
        transform: `translate(-${50}%, -${50}%)`,
    });
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Fab
                color="primary"
                aria-label="add"
                className={styleClass.fab}
                onClick={handleOpen}
            >
                <AddIcon />
            </Fab>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={styleClass.paper}>
                    <div className={styleClass.modalHeader}>
                        <h2 id="simple-modal-title">
                            New Tune
                        </h2>
                        <div className={styleClass.close}>
                            <CloseIcon onClick={handleClose} />
                        </div>
                    </div>
                    <div id="simple-modal-description">
                        <CreateForm data={props.data} roomId={props.roomId} onClick={handleClose} />
                    </div>
                </div>
            </Modal>
        </>
    )
};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(12),
        right: theme.spacing(4),
        '&:hover': {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
        }
    },
    paper: {
        position: 'absolute',
        width: '80%',
        backgroundColor: theme.palette.background.paper,
        border: '2px radius #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    close: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    modalHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
}));
// ______________________________________________________
//
export default Component;