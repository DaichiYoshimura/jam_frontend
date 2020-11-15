import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '../../../atoms/Button'
import InputField from '../../../atoms/InputField'

// ______________________________________________________
//
type Props = {
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
                <InputField id="part" label="part" />
                <Button caption="Save" onClick={props.onClick} />
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
}));
// ______________________________________________________
//
export default Component;