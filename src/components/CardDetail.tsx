import { FC } from 'react';
import { Product } from '@/types/product';
import Carousel from './Carousel';
import Collapse from './Collapse';

interface CarouselProps {
  product: Product;
  
}

const CardDetail: FC<CarouselProps> = ({ product }) => {
  return (
    <>
      <Carousel product={product} />
      <div className='container cardDetails'>
        <h1>{product.productName}</h1>
        <p className='line-through'>R$ 2.940,00 <span className='badge'>15%</span></p>
        <p className='colorPrice'>R$ {product.price}</p>
        <p className='installment'>
          <span className='font-bold'>15x</span> de <span className='font-bold'>R$ 166,67</span> sem juros 
        </p>
        <div className='cashback w-full'>
          pague à vista com Pix e <span className='font-bold'> ganhe 10% de cashback</span>
        </div>
      </div>
      <Collapse product={product} />
    </>
  )
}

export default CardDetail;