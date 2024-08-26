import { useState } from 'react';

const Carrossel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full h-auto" />
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2">
        &#10094;
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2">
        &#10095;
      </button>
    </div>
  );
};

export default Carrossel;