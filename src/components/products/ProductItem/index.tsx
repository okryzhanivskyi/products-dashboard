import './styles.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IProduct } from "@/types/product";
import { PRODUCTS_BASE_URL } from '@/config/api/endpoints';

interface Props {
  product: IProduct,
};

const ProductItem = ({
  product
}: Props): React.ReactElement => (
    <div className="product-item">
      <Link href={`${PRODUCTS_BASE_URL}/${product.id}`}>
      <div className="product-item__image">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={200}
          height={200}
        />
      </div>
      <div className="product-item__title">{ product.title }</div>
      <div className="product-item__info">
        <div className="product-item__price">Price:{ product.price}$</div>
        <div className="product-item__rating">Rating:{ product.rating }</div>
      </div>
      <div className="product-item__description">{ product.description.slice(0, 100) }</div>
      </Link>
    </div>
);

export default ProductItem;