import React, { useRef } from 'react';

const ScrollableImageCardList = ({ images }) => {
  const scrollContainerRef = useRef(null);

  const scrollImages = (scrollAmount) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex p-4 space-x-4 overflow-x-hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="max-w-xs p-4 border rounded-lg shadow-md">
              <img src={image.url} alt={image.alt} className="w-[200px] h-[200px]" />
              <div className="mt-2">
                <h3 className="text-lg font-semibold">{image.title}</h3>
                {/* <p className="text-gray-500">{image.description}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => scrollImages(-200)} // Adjust the scroll amount as needed
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-full"
      >
        &larr; 
      </button>
      <button
        onClick={() => scrollImages(200)} // Adjust the scroll amount as needed
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-full"
      >
         &rarr;
      </button>
    </div>
  );
};


  
  const ScrollableImage = () => {
    const images = [
      {
        url: 'https://images.unsplash.com/photo-1583223667854-e0e05b1ad4f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        alt: 'Image 1',
        title: 'Laptop',
        description: 'Description for Image 1',
      },
      {
        url: 'https://us.123rf.com/450wm/olgaarkhipenko/olgaarkhipenko1812/olgaarkhipenko181200282/115316863-fashionable-concept-brown-leather-men-s-bag-wristwatch-leather-passport-cover-pen-blank-white.jpg?ver=6',
        alt: 'Image 2',
        title: 'Bag',
        description: 'Description for Image 2',
      },
      {
        url: 'https://media.istockphoto.com/id/187872959/photo/christmas-gifts-arranged-on-a-table-with-spruce-branches.jpg?s=1024x1024&w=is&k=20&c=-rouDpnP5i8eQGQUbqt9Gmb6Chb_8TlTw3loeNS-jzo=',
        alt: 'Image 1',
        title: 'Perfumes',
        description: 'Description for Image 1',
      },
      {
        url: 'https://images.unsplash.com/photo-1552046122-03184de85e08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        alt: 'Image 2',
        title: 'Face Cream',
        description: 'Description for Image 2',
      },
      {
        url: 'https://media.istockphoto.com/id/1344553243/photo/modern-loft-in-industrial-area.jpg?s=1024x1024&w=is&k=20&c=5Z729gyeQ5fvai0QZfElKlMFX8Kp8afwnCQYxpYgaaE=',
        alt: 'Image 1',
        title: 'HD TV',
        description: 'Description for Image 1',
      },
      {
        url: 'https://images.pexels.com/photos/2219195/pexels-photo-2219195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Image 2',
        title: 'Jems',
        description: 'Description for Image 2',
      },
      {
        url: 'https://w0.peakpx.com/wallpaper/847/236/HD-wallpaper-hoodie-anonymus-boy-sitting-aside-alone-hoodie-anonymus-artist-artwork-digital-art-thumbnail.jpg',
        alt: 'Image 2',
        title: 'Hoodie',
        description: 'Description for Image 2',
      },
      {
        url: 'https://static.vecteezy.com/system/resources/thumbnails/001/911/027/small/legumes-and-beans-assorted-on-a-black-cement-surface-free-photo.jpg',
        title: 'Daal',
        description: 'Description for Image 2',
      },
      {
        url: 'https://www.eatthis.com/wp-content/uploads/sites/4//media/images/ext/543763370/types-of-cooking-oils.jpg?quality=82&strip=1',
        alt: 'Image 2',
        title: 'Refine Oil',
        description: 'Description for Image 2',
      },
      {
        url: 'https://m.media-amazon.com/images/I/61UXS6MK7uL.jpg',
        alt: 'Image 2',
        title: 'Face Wash',
        description: 'Description for Image 2',
      },
      {
        url: 'https://thumbs.dreamstime.com/z/diamond-bangles-beautiful-shot-dummie-hands-53951031.jpg?w=992',
        alt: 'Image 2',
        title: 'Bangles',
        description: 'Description for Image 2',
      },
      // Add more image objects as needed
    ];
  
    return (
      <div className="container mx-auto p-4">
       <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Availabe Products category...
                </h1>
        <ScrollableImageCardList images={images} />
      </div>
    );
  };
  
  export default ScrollableImage;