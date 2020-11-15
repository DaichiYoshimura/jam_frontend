import React from 'react'
import { NextComponentType, NextPageContext } from 'next';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core'
// ______________________________________________________
//
type Props = {
    explanation?: string,
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => (
    <div className={useStyles().container}>
        <div className={useStyles().box}>
            <div>{props.explanation}</div>
        </div>
    </div>
);
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            position: 'absolute',
            height: "90%",
            width: "100%",
            boxShadow: 'none',
            color: "white",
            backgroundColor: "slategrey"
        },
        box: {
            height: "100%",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }),
);
// ______________________________________________________
//
export default Component;
