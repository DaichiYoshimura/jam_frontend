import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ListItem, Checkbox } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '../../atoms/ListItemText'
import ArrayCounter from '../../atoms/ArrayCounter'
// ______________________________________________________
//
type Props = {
    id: string
    name: string,
    part: string,
    performedTunes: Array<string>
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => {

    const styleClass = useStyles(props);

    const [checked, setChecked] = React.useState([""]);
    const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    const labelId = `checkbox-list-label-${props.id}`;
    return (
        <ListItem
            className={styleClass.root}
            key={props.id}
            role={undefined}
            dense
            button
            onClick={handleToggle(props.id)}
        >
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={checked.indexOf(props.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            </ListItemIcon>
            <ListItemText
                primary={props.name}
                className={styleClass.text}
            />
            <ListItemText
                primary={props.part}
                className={styleClass.text}
            />
            <ArrayCounter
                target={props.performedTunes}
            />
        </ListItem>
    );
};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        color: "black",
        marginBottom: "3px",
        borderBottom: "3px",
        backgroundColor: theme.palette.background.paper,
        maxHeight: "56px"
    },
    text: {
    }
}));
// ______________________________________________________
//
export default Component;