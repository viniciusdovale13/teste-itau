import { FC } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';

interface CarouselProps {
  product: Product;
  
}

const Carousel: FC<CarouselProps> = ({ product }) => {
  const images = product.images;
  return (
    <>
      <div className="w-64 carousel rounded-box">
        {images.map(image => (
          <div key={image.sort} className="carousel-item w-full">
            <Image
              src={image.path}
              alt={image.path}
              width={500}
              height={400}
            >

            </Image>
          </div> 
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a> 
        <a href="#item2" className="btn btn-xs">2</a> 
        <a href="#item3" className="btn btn-xs">3</a> 
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </>
  )
}

export default Carousel;