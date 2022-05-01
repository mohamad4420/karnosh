import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Styles from '../../styles/Search.module.scss';
const style = {
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:"100vh",
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
    <li onClick={handleOpen}><SearchIcon/></li>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={Styles.Main}>
              
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
