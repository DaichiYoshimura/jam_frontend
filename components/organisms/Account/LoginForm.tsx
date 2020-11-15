import React from 'react';
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '../../atoms/Button'
// ______________________________________________________
//
type Props = {
    onClick?: any
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => {
    const styleClass = useStyles();
    return (
        <div className={styleClass.back}>
            <Container className={styleClass.root}>
                <div>
                    <div className={styleClass.subtitle}>
                        <Typography variant="h4">Account Service</Typography>
                    </div>
                    <div className={styleClass.userId}>
                        <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                    </div>
                    <div className={styleClass.password}>
                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                    </div>
                    <div className={styleClass.forgotPassword}>
                        <a href="">forgot password?</a>
                    </div>
                    <div className={styleClass.button}>
                        <Button caption="Login" onClick={props.onClick} />
                    </div>
                </div>
            </Container >
        </div>

    );
};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
    back: {
        paddingTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '80%',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: theme.spacing(2)
    },
    subtitle: {
        paddingTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userId: {
        paddingTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    password: {
        paddingTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    forgotPassword: {
        paddingTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '100%',
    }
}),
);
// ______________________________________________________
//
export default Component;