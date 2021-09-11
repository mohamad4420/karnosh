
import {
    EmailShareButton,
    EmailIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    WhatsappShareButton,
    WhatsappIcon
  } from "react-share";
import React, {useState } from "react";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import ShareIcon from '@material-ui/icons/Share';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';

export default function shared(props){
    const[show,setShow]=useState(true);
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
      };
      function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        }
      }
      const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
      };
let Show;
if(show){
    Show=
    <>

    </>
}
return(
    <>
       
       <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          style={{background:'transperent'}}
          onClick={handleToggle}
        
          
        >
            <div className="IconShare">
          <ShareIcon/>
          </div>
        </Button>
    

        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>

                  <MenuList autoFocusItem={open}  onKeyDown={handleListKeyDown} >
                      <div className="innerShare">
       <WhatsappShareButton title={props.title} url={process.env.domains+props.url}>
   <WhatsappIcon size={30} round={true} />
    </WhatsappShareButton>


   <FacebookMessengerShareButton appId="774501293378309"  title={props.title} url={process.env.domains+props.url}>
   <FacebookMessengerIcon size={32} round={true} />
    </FacebookMessengerShareButton>


   <EmailShareButton title={props.title} url={process.env.domains+props.url}>
   <EmailIcon size={32} round={true} />
    </EmailShareButton>
    </div>

                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

<div className="contanerShared">
    <div></div>
{Show}
</div>
  
    </>
)
}