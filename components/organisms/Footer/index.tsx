import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { People, LibraryMusic, Settings } from '@material-ui/icons';
import Link from '../../atoms/Link'
// ______________________________________________________
//
type Props = {
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => {

    const classes = useStyles();

    return (
        <BottomNavigation
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                label="Players"
                icon={<People className={classes.icon} />}
                className={classes.label}
                component={Link}
                href='/rooms/85d9a08b-60cd-443b-8799-ad90b75e8317/players'
            />
            <BottomNavigationAction
                label="Tunes"
                icon={<LibraryMusic className={classes.icon} />}
                className={classes.label}
                component={Link}
                href='/rooms/85d9a08b-60cd-443b-8799-ad90b75e8317/tunes'
            />
            <BottomNavigationAction
                label="Settings"
                icon={<Settings className={classes.icon} />}
                className={classes.label}
                component={Link}
                href='/rooms/85d9a08b-60cd-443b-8799-ad90b75e8317/settings'
            />
        </BottomNavigation>
    )
}
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) =>

    createStyles({
        root: {
            position: 'absolute',
            width: '100%',
            bottom: theme.spacing(0),
            backgroundColor: theme.palette.primary.main,
        },
        label: {
            color: "white",

        },
        icon: {
            color: "white"
        },
    }),

);
// ______________________________________________________
//
export default Component;