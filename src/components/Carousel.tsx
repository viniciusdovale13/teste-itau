'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface CarouselProps {
  product: Product;
}

const Carousel: FC<CarouselProps> = ({ product }) => {
  const images = product.images;

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex justify-center items-centerago">
      <div className="carousel-container w-full max-w-3xl relative">
        <div className="carousel">
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                key={index}
                className="carousel-item"
                style={{ display: index === currentIndex ? 'block' : 'none' }}
              >
                <Image src={image.path} alt={`Imagem ${index + 1}`} width={800} height={600} className="mx-auto" />
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-indexes mt-4 flex justify-center">
          <button className="prev-btn px-2 py-1 mr-2 bg-orange-400 text-white" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          {images.map((_, index) => (
            <button
              key={index}
              className={`index-btn mx-1 px-2 py-2 rounded-full ${
                index === currentIndex ? 'bg-orange-600 text-white' : 'bg-gray-300 text-black'
              }`}
              onClick={() => goToSlide(index)}
            >
            </button>
          ))}
          <button className="next-btn px-2 py-1 bg-orange-400 text-white" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;