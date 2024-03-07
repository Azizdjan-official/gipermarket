import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useGetcategory } from './../pages/Homepage/service/query/useGetcategory';
import Userloginicon from './../icons/Userloginicon';
import Form from './Form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UserModal() {

  const { data } = useGetcategory();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <button className='flex items-center justify-center bg-[#FEEE00] px-3 py-2 ' onClick={handleOpen}> <Catalogicon/> &nbsp; Каталог</button> */}
      <button onClick={handleOpen} className='flex flex-col items-center justify-center '>
                <Userloginicon/>
                <p className='text-[#211A1A] font-[400] text-md'>Войти</p>
                
            </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form/>
        </Box>
      </Modal>
    </div>
  );
}