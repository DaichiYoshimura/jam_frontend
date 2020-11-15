import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { List, Divider } from '@material-ui/core'
import { PlayerType } from '../../../interfaces'
import ListItem from '../../molecules/Tune/CheckListItem'

// ______________________________________________________
//
type Props = {
    data: PlayerType[],
    roomId: string
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = (props) => {

    const styleClass = useStyles();

    return (
        <div className={styleClass.back}>
            <List className={styleClass.root}>
                {props.data.map((value: PlayerType) => {
                    return (
                        <div key={value.id}>
                            <ListItem
                                id={value.id}
                                name={value.name}
                                part={value.part}
                                performedTunes={value.performedTunes}
                            />
                            <Divider component="li" />
                        </div>
                    )
                })}
            </List>
        </div>
    )
};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
    back: {
        backgroundColor: theme.palette.background.paper
    },
    root: {
        width: '100%',
        maxHeight: '150px',
        overflow: 'auto'
    },
}));
// ______________________________________________________
//
export default Component;