import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { PlayerType } from '../../../interfaces'
import Button from '../../../components/atoms/Button'
import InputField from '../../../components/atoms/InputField'
import CheckList from './CheckList'
import { Typography } from '@material-ui/core'

// ______________________________________________________
//
type Props = {
    data: PlayerType[],
    roomId: string,
    onClick: any
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = (props) => {
    const styleClass = useStyles(props);

    return (
        <div className={styleClass.back}>
            <div className={styleClass.root}>
                <InputField id="name" label="name" />
                <InputField id="key" label="key" />
                <Typography className={styleClass.text}>Select Players...</Typography>
                <CheckList data={props.data} roomId={props.roomId} />
                <Button caption="Join" onClick={props.onClick} />
            </div>
        </div>
    )
};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
    back: {
        backgroundColor: theme.palette.background.paper,
        justifyContent: "center",
        alignItems: "center"
    },
    root: {
        color: theme.palette.background.paper,
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "black"
    }
}));
// ______________________________________________________
//
export default Component;