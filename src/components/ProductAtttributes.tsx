import { Product } from '@/types/product';

interface Props {
    product: Product;
}



const ProductAttributes: React.FC<Props> = ({ product }) => {
    const attributes = product.productAttributes;
  return (
    <div className="w-full max-w bg-white rounded-lg shadow-md p-4">
      <div className="space-y-4">
        {attributes.map((attribute) => (
          <div className="flex items-center" key={attribute._id}>
            <span className="font-bold mr-2">{attribute.name}:</span>
            <span>{attribute.values[0].value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductAttributes;