import React, { useState, useEffect } from 'react';
import { Modal } from '@mui/material';
import CustomizedTables from './Table/RealTable';

const ImageSlider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentImageIndex, images.length]);

    return (
        <div className="slideshow" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {/* <button className="slideshow-button" onClick={handlePreviousClick}><FiChevronLeft /></button> */}
            <img src={images[currentImageIndex]} alt="Slideshow" style={{maxWidth: '1200px', height: '600px'}}/>
            <div onClick={handleClickOpen} style={{position: 'fixed', width: '50px',top: '300px', right: '0px', color: 'white', height: '250px', zIndex: '99999', borderTop: '30px solid transparent', borderBottom: '30px solid transparent', borderRight: '35px solid #1F4A7C', cursor: 'pointer'}}>
            <span style={{position: 'fixed', top: '390px', width: '220px', height: '50px', right: '-110px', rotate: '270deg', cursor: 'pointer'}}>Real Time Application status</span>
            </div>
            <Modal open={open} onClose={handleClose} closeAfterTransition>
             <CustomizedTables />
             </Modal>
        </div>
    );
};

export default ImageSlider