import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Catalogicon from '../icons/Catalogicon';
import { useGetcategory } from './../pages/Homepage/service/query/useGetcategory';
import { Link } from 'react-router-dom';

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

export default function BasicModal() {

  const { data } = useGetcategory();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className='flex items-center justify-center bg-[#FEEE00] px-3 py-2 ' onClick={handleOpen}> <Catalogicon/> &nbsp; Каталог</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='grid grid-cols-3 gap-5 w-[60vw] h-[60vh]'>
          {data?.map((item)=> <div className='cursor-pointer'  key={item.id}>
          <div className="flex bg-[#F6F6F6] items-center justify-between px-3  mx-2 h-[25vh]">
            <div><img className="object-scale-down " src={item.img}  /></div>
            <div><p className="text-[#333333] font-[500] text-lg">{item.title}</p></div>
          </div>
          
          </div>)}
          </div>
        </Box>
      </Modal>
    </div>
  );
}