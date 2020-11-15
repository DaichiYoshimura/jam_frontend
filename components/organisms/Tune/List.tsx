import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { List, Divider } from '@material-ui/core'
import { TuneType } from '../../../interfaces'
import ListItem from '../../molecules/Tune/ListItem'
// ______________________________________________________
//
type Props = {
  data: TuneType[]
}
// ______________________________________________________
//
const Component: NextComponentType<NextPageContext, {}, Props> = (props) => {

  const styleClass = useStyles()
  const router = useRouter()
  const { roomId } = router.query
  return (
    <div className={styleClass.back}>
      <List className={styleClass.root}>
        {props.data.map((value: any) => {
          const detailPath = "/rooms/" + roomId + "/tunes/" + value.id
          return (
            <div key={value.id}>
              <ListItem
                id={value.id}
                primary={value.name}
                playing_key={value.playingKey}
                status={value.status}
                href={detailPath}
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
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.contrastText,
      width: '100%',
    },
    back: {
      backgroundColor: theme.palette.secondary.main,
      height: "756px"
    },
  }),
);
// ______________________________________________________
//
export default Component;