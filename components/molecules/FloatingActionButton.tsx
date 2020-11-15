import React from 'react';
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
// ______________________________________________________
//
type Props = {

}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => (
  <Fab color="primary" aria-label="add" className={useStyles().fab}>
    <AddIcon />
  </Fab>
);
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'absolute',
      bottom: theme.spacing(12),
      right: theme.spacing(4),
      backgroundColor: "#003333"
    }
  }),
);
// ______________________________________________________
//
export default Component;