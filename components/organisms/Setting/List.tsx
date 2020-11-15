import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Account from '../../molecules/Setting/ListItem/Account'
import Application from '../../molecules/Setting/ListItem/Application'
import Divider from '@material-ui/core/Divider'
import { SettingType } from '../../../interfaces'


// ______________________________________________________
//
type Props = {
    data: SettingType[]
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = (props) => {

    return (
        <div className={useStyles(props).back}>
            <List className={useStyles(props).root}>
                <Account
                    href=""
                    caption="login_name"
                />
                <Divider component="li" />
                <Application
                    href=""
                    caption="Version 1.0.0"
                />
                <Divider component="li" />
            </List>
        </div>
    )
};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            color: "white",
            width: '100%',
        },
        subtitle: {
            fontStyle: "bold",
            paddingLeft: theme.spacing(2)
        },
        back: {
            backgroundColor: "slategrey",
            height: "600px"
        },
    }),
);
// ______________________________________________________
//
export default Component;