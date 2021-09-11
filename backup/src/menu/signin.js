import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import BlockIcon from '@material-ui/icons/Block';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import Image from 'next/image'
import Google from '../auth/google'
import Facebook from '../auth/Facebook'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  signOut:{
    marginLeft:30
  }

}));
                                                                                                     
export default function MenuListComposition() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [sign ,setSign] = React.useState(false);
  const [data ,setData] = React.useState('');
  let S;
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
 

  const functionSign=(sign)=>{
    setSign(sign)
  }

  const functionData=(data)=>{
    setData(data)
  }
useEffect(()=>{
  try{
 var da= localStorage.getItem('da');
 da=JSON.parse(da);
 if(da!=null){
   setData(da)
    setSign(true)
 }
 else{
   setSign(false)
 }
  }
catch(err){
  setSign(false)
}
},[])

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

  if(sign && data.length!=0)
  {
  S =
  <>
        
          <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          style={{background:'transperent'}}
          onClick={handleToggle}
          style={{marginLeft:-20,paddingBottom:20,marginRight:10}}
          
        >
          <Image width={35} height={35} className="imgProfile" alt="asdasd" src={data.im} />
        </Button>
    

        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>



                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>


                  <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <AccountCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">تعديل الملف الشخصي</Typography>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <EmojiPeopleIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">قائمه الاصدقاء</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <BlockIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">قائمه الحظر</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <QueuePlayNextIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">طلبات الافلام</Typography>
                </MenuItem>

                    <MenuItem onClick={handleClose} className={classes.signOut}>
                    <Fab variant="extended" color="secondary" aria-label="add" className={classes.margin} onClick={()=>{localStorage.removeItem('da');localStorage.removeItem('list');location.reload();}}>
                        تسجيل الخروج                   
                      </Fab>
                    </MenuItem>


                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

  
  </>
  }
  else{
    S =
    <>
     <Button
        variant="contained"
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
        color="secondary"
          onClick={handleToggle}
        >
          تسجيل الدخول
        </Button>
        <Popper style={{marginTop:18}} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>


               

                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>
                      <Google 
                      />
                   </MenuItem>

                  </MenuList>





                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

    </>

  }


  return (
 <>


{S}

  </>
  );
}
