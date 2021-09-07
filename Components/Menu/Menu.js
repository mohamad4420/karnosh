import React from 'react';
import loadable from '@loadable/component'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'
const Acount = loadable(() => import('./Acount'))
const IconButton = loadable(() => import('@material-ui/core/IconButton'))
const Button = loadable(() => import('@material-ui/core/Button'))

const useStyles = makeStyles((theme) => ({
  root: {
    direction:"rtl",
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(-3),
  },
  title: {
    flexGrow: 1,
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Link href="/">
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <img src='/icon/favicon.png' width="40px" height="40px"></img>
        </IconButton>
        </Link>
        <Button color="inherit">افلام</Button>
        <Button color="inherit">مسلسلات</Button>
        <Button color="inherit" >انمي</Button>
        <Button color="inherit">قائمتي</Button>      
          <Typography  className={classes.title}>
          </Typography>
          <Acount/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
