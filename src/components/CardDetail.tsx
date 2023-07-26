import { FC } from 'react';
import { Product } from '@/types/product';
import Carousel from './Carousel';

interface CarouselProps {
  product: Product;
  
}

const CardDetail: FC<CarouselProps> = ({ product }) => {
  console.log("product", product)
  return (
    <>
      <div className='container'>
        <Carousel product={product} />
        <h1>{product.productName}</h1>
        <p className='line-through'>R$ 2.940,00 <span className='badge'>15%</span></p>
        <p className='colorPrice'>R$ {product.price}</p>
        <p className='installment'>
          <span className='font-bold'>15x</span> de <span className='font-bold'>R$ 166,67</span> sem juros 
        </p>
        <p className='cashback'>
          pague à vista com Pix e <span className='font-bold'> ganhe 10% de cashback</span>
        </p>
      </div>
    </>
  )
}

export default CardDetail;