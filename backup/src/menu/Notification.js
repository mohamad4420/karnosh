import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: -5,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);


const useStyles = makeStyles((theme) => ({

  direction: 'ltr',
  paper: {
    marginRight: theme.spacing(2),
  },
  IconButton:{
    color:'#e0f2f1',
    marginLeft:'5px',
  }
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
 <>
     



        <IconButton 
        aria-label="notification"
         className={classes.IconButton} 
         onClick={handleToggle}    
         ref={anchorRef}
         aria-controls={open ? 'menu-list-grow' : undefined}
         aria-haspopup="true">
             
            <StyledBadge badgeContent={3} color="primary">
            <NotificationsIcon  />
            </StyledBadge>
        </IconButton>


        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" className={classes.root} className="notificationItemLest" onKeyDown={handleListKeyDown}>


{
  // start this code add notification
}
                  <MenuItem onClick={handleClose}>
                            <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="اعلان فلم" secondary="فلم الجوده 2020 الان على كرنوش يرجى الضفغط على الاشعار للمشاعهده" />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                            <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="اعلان فلم" secondary="فلم الجوده 2020 الان على كرنوش يرجى الضفغط على الاشعار للمشاعهده" />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                  </MenuItem>  <MenuItem onClick={handleClose}>
                            <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="اعلان فلم" secondary="فلم الجوده 2020 الان على كرنوش يرجى الضفغط على الاشعار للمشاعهده" />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                  </MenuItem>  <MenuItem onClick={handleClose}>
                            <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="اعلان فلم" secondary="فلم الجوده 2020 الان على كرنوش يرجى الضفغط على الاشعار للمشاعهده" />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                  </MenuItem>  <MenuItem onClick={handleClose}>
                            <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="اعلان فلم" secondary="فلم الجوده 2020 الان على كرنوش يرجى الضفغط على الاشعار للمشاعهده" />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                  </MenuItem>  <MenuItem onClick={handleClose}>
                            <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="اعلان فلم" secondary="فلم الجوده 2020 الان على كرنوش يرجى الضفغط على الاشعار للمشاعهده" />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                  </MenuItem>  <MenuItem onClick={handleClose}>
                            <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="اعلان فلم" secondary="فلم الجوده 2020 الان على كرنوش يرجى الضفغط على الاشعار للمشاعهده" />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                            <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="اعلان فلم" secondary="فلم الجوده 2020 الان على كرنوش يرجى الضفغط على الاشعار للمشاعهده" />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                  </MenuItem>

 {
   // end ntification item
 }             
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

  </>
  );
}
