import React from 'react';
import loadable from '@loadable/component'
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import Image from 'next/image'
const Typography = loadable(() => import('@material-ui/core/Typography'))
const Toolbar = loadable(() => import('@material-ui/core/Toolbar'))
const AppBar = loadable(() => import('@material-ui/core/AppBar'))
const Acount = loadable(() => import('./Acount'))
const IconButton = loadable(() => import('@material-ui/core/IconButton'))
const Button = loadable(() => import('@material-ui/core/Button'))
const Search = loadable(() => import('./Search'))

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
      <AppBar position="fixed" >
        <Toolbar >
          <Link href="/">
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <Image  src='/icon/favicon.png' width="40px" height="40px"/>
        </IconButton>
        </Link>
        <Link href="/movie">
        <Button color="inherit">افلام</Button>
        </Link>
        <Button color="inherit">مسلسلات</Button>
        <Button color="inherit" >انمي</Button>
        <Button color="inherit">قائمتي</Button>      
          <Typography  className={classes.title}>
          </Typography>
          <Search/>
          <Acount/>
       
        </Toolbar>
      </AppBar>
    </div>
  );
}
