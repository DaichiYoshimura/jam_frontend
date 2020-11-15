import React from 'react'
import { NextComponentType, NextPageContext } from 'next';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar } from '@material-ui/core'
// ______________________________________________________
//
type Props = {
  title?: string,
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
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
    title: {
      flexGrow: 1,
    },
  }),

);
// ______________________________________________________
//
export default Component;
