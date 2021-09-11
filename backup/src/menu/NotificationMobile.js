import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import ListItemText from '@material-ui/core/ListItemText';
import { MenuItem } from '@material-ui/core';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: -5,
     border: `1px solid black`,
      padding: '0 4px',
    },
  }))(Badge);
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  IconButton:{
    marginLeft:-2,
    color:'#e0f2f1'
      
        },
        root:{
          marginTop:10
        }

 
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Search() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
  



 

 <IconButton 
        aria-label="notification"
         className={classes.IconButton} 
         onClick={handleClickOpen}   
 
         aria-controls={open ? 'menu-list-grow' : undefined}
         aria-haspopup="true">
             
            <StyledBadge badgeContent={3} color="secondary">
            <NotificationsIcon  />
            </StyledBadge>
        </IconButton>


      <Dialog fullScreen open={open}  onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
           
            <Typography variant="h6" className={classes.title}>
            <Button style={{ color:'#e0f2f1',fontSize:'20px',marginRight:'4px' }}   aria-label="movie"  >الاشعارات</Button>
            </Typography>
            <IconButton  aria-label="close" edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        

              <div className={classes.root}>

                <MenuItem>
                      <ListItem >
                        <ListItemAvatar>
                          <Avatar>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText dir='rtl' primary="اعلان فلم" secondary="فلم الجوده 2020 الان على كرنوش يرجى الضفغط على الsaddssssssssssssssssssssssssssssssssاشعار للمشاعهده" />
                      </ListItem>
                      </MenuItem>     
                      </div>
      </Dialog>
    </>
  );
}
