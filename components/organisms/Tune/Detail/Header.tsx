import React from 'react'
import { NextComponentType, NextPageContext } from 'next';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, IconButton } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Link from '../../../atoms/Link'
// ______________________________________________________
//
type Props = {
  title?: string,
  roomId?: string
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => {

  const classes = useStyles();
  const prevPath = "/rooms/" + props.roomId + "/tunes"
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            component={Link}
            href={prevPath}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )

};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) =>

  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),

);
// ______________________________________________________
//
export default Component;
