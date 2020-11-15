import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { List, Divider } from '@material-ui/core'
import ListItem from '../../molecules/Player/ListItem'
import { PlayerType } from '../../../interfaces'
import { getStaticProps } from '../../templates/Layout'

// ______________________________________________________
//
type Props = {
  data: PlayerType[],
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = (props) => {

  const styleClass = useStyles(props);
  const router = useRouter()
  const { roomId } = router.query
  //const sortedData = props.data.sort((a, b) => (a.name > b.name && a.status <= b.status ? 1 : -1));

  return (
    <div className={styleClass.back}>
      <List className={styleClass.root}>
        {props.data.map((value: any) => {
          const detailPath = "/rooms/" + roomId + "/players/" + value.id
          return (
            <div key={value.id}>
              <ListItem
                key={value.id}
                id={value.id}
                primary={value.name}
                secondary={value.part}
                performedTunes={value.performedTunes}
                status={value.status}
                href={detailPath}
              />
              <Divider component="li" />
            </div>
          )
        })}
      </List>
    </div>
  );
};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    color: theme.palette.primary.contrastText,
    width: '100%',
  },
  back: {
    backgroundColor: theme.palette.secondary.main,
    height: "600px"
  },
}));
// ______________________________________________________
//
export default Component;