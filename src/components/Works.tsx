import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { makeStyles } from '@mui/styles'
import List from '@mui/material/List'
import ListItem, { ListItemProps } from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import FolderIcon from '@mui/icons-material/Folder'



const useStyles = makeStyles((theme) => ({
  root: {
    width: 770,
    maxWidth: '100%',
  },
}));

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const Works: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5' >
            Works
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <List className={classes.root}>
            <ListItem>
              <ListItemLink href='https://github.com/SaTtto-glitch/DogImageApp'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='DOGアプリ' secondary='犬の画像をランダムに生成するサイト' />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href='https://github.com/SaTtto-glitch/React-forum'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='掲示板アプリ' secondary='スレッド作成とコメント投稿ができるアプリ' />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href='https://github.com/SaTtto-glitch/bookreview-app'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='書籍レビューアプリ' secondary='' />
              </ListItemLink>
            </ListItem>
          </List>




        </Box>
      </Box>
    </>
  );
}

export default Works;