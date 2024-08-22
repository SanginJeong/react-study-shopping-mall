import React, { useEffect, useState } from 'react'

const Carousel = ({carouselItems}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentIndex((prev)=> 
        prev === carouselItems.length - 1 
        ? 0 
        : prev + 1)
    }, 2000);

    return () => clearInterval(interval);
  },[carouselItems]);

  return (
    <div className="carousel">
      {
        <>
          <img
            src={carouselItems[currentIndex]?.img}
            alt={carouselItems[currentIndex]?.title}
            className="carousel-image"
          />

          <div className="carousel-index">
            {currentIndex + 1} / {carouselItems.length}
          </div>
        </>
      }

      
    </div>
  )
}

export default Carousel