import React, { ReactElement } from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { BottomNavigationAction } from '@material-ui/core'
// ______________________________________________________
//
type Props = {
    label: string,
    href: string,
    hrefAs: string,
    icon: ReactElement,
    className: any,
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = (children, props: Props) => {

    const styleClass = useStyles(props);

    return (
        <BottomNavigationAction
            label={props.label}
            icon={props.icon}
            href={props.href}
            className={useStyles(props).root}
        />
    );
};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        position: 'absolute',
        width: '100%',
        bottom: theme.spacing(0),
        backgroundColor: '#003333'
    },
}));
// ______________________________________________________
//
export default Component;