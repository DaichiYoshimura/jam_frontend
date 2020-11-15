import React from 'react';
import { NextComponentType, NextPageContext } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';

// ______________________________________________________
//
type Props = {
  primary?: string,
  secondary?: string,
  className?: any
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = props => {

  const styleClass = useStyles(props);

  return (
    <ListItemText
      primary={props.primary}
      secondary={props.secondary}
      className={styleClass.root}
    />
  );

};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: 'inherit'
  }
}));
// ______________________________________________________
//
export default Component;