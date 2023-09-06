import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex justify-center items-center">
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-full"
      >
        &larr; Prev
      </button>
      <div className="imageBox justify-center items-center">
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className=" w-[900px] h-[500px] rounded-lg"
      />
      </div>
      
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2  bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-full"
      >
        Next &rarr;
      </button>
    </div>
  );
};


const Carousel = () => {
    const images = [
        'https://img.freepik.com/free-photo/online-fashion-shopping-with-computer_23-2150400628.jpg?w=740&t=st=1693849167~exp=1693849767~hmac=90925406cdd201f83fddca27f38ef142810d87f03db5756509f5fe4f349ace2f',
      'https://images.unsplash.com/photo-1615634260167-c8cdede054de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcmZ1bWUlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      'https://t3.ftcdn.net/jpg/06/29/26/78/240_F_629267836_AcfLTqqqh9ZOnkVvLVN7YLc8Phs7Unrc.jpg',
      'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlfGVufDB8fDB8fHww&w=1000&q=80'
    ];
  
    return (
      <div className="container mx-auto p-4">
        <ImageCarousel images={images} />
      </div>
    );
  };
  
  export default Carousel;;