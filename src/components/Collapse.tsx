'use client';

import { useState } from 'react';
import { Product } from '@/types/product';
import ProductAttributes from './ProductAtttributes';


interface CarouselProps {
  product: Product;
}


const Collapse: React.FC<CarouselProps> = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCollapse = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const titulosFixos = [
    "Descrição do produto",
    "Características do produto",
    "regras de Ponto e Cashback"
  ];

  const arrayDeObjetos = titulosFixos.map((title, index) => {
    const descricaoDaAPI = [
      product.productDescription,
      <ProductAttributes key={index} product={product} />,
    ];
    return {
      title,
      description: descricaoDaAPI[index] || "Descrição não disponível",
    };
  });
  return (
    <div className="w-full space-y-4">
      {arrayDeObjetos.map((item, index) => (
        <div key={index} className="border rounded">
          <button
            className="w-full p-4 text-left font-medium bg-gray-200 hover:bg-gray-300"
            onClick={() => toggleCollapse(index)}
          >
            {item.title}
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-white">{item.description}</div>
          )}
        </div>
      ))}
      
    </div>
  );
};

export default Collapse;
