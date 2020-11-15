import React from 'react';
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '../../atoms/Button'
import { FormControlLabel, Checkbox } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
// ______________________________________________________
//
type Props = {
    onClick?: any
    caption?: string
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => {

    const styleClass = useStyles(props);

    //Modal Control
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

    //CheckBox Control
    const [checked, setChecked] = React.useState(false);
    const handleAgree = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(!event.target.checked);

        setOpen(false);
    };
    const handleDisagree = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        setOpen(false);
    };


    return (
        <>
            <div className={styleClass.root}>
                <div className={styleClass.privacyPolicy}>
                    <FormControlLabel
                        control={
                            <Checkbox icon={<CheckCircleOutlineIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                name="checkedH"
                                checked={checked}
                            />
                        }
                        label="read privacy policy"
                        onClick={handleOpen}
                    />
                </div>
                <div className={styleClass.registerButton}>
                    <Button caption="Register" onClick={props.onClick} disabled={!checked} />
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={styleClass.paper}>
                    <div className={styleClass.modalHeader}>
                        <h2 id="simple-modal-title">
                            Privacy Policy
                        </h2>
                    </div>
                    <div id="simple-modal-description">
                        Context
                    </div>
                    <div className={styleClass.modalButtons}>
                        <div className={styleClass.modalButton}>
                            <Button
                                caption="Disagree"
                                onClick={handleDisagree}
                            />
                        </div>
                        <div className={styleClass.modalButton}>
                            <Button
                                caption="Agree"
                                onClick={handleAgree}
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    privacyPolicy: {
        color: '#0000FF',
        textDecoration: 'underline'
    },
    registerButton: {
        width: '120%'
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
        alignItems: "center",
    },
    modalButtons: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    modalButton: {
        width: '40%'
    }
}));
// ______________________________________________________
//
export default Component;