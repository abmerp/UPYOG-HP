import React, { useState, useEffect } from 'react';
// import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';


const Slideshow = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentImageIndex, images.length]);

    return (
        <div className="slideshow" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {/* <button className="slideshow-button" onClick={handlePreviousClick}><FiChevronLeft /></button> */}
            <img src={images[currentImageIndex]} alt="Slideshow" style={{maxWidth: '100%', height: 'auto'}}/>
            {/* <button className="slideshow-button" onClick={handleNextClick}><FiChevronRight /></button> */}
        </div>
    );
};

export default Slideshow;
