import './styles.scss';
import { IProduct } from "@/types/product";
import ProductImages from '../ProductImages';

interface Props {
  product: IProduct;
};

const ProductDetails = ({
  product,
}: Props): React.ReactElement => (
  <div className="product-details">
    <div className="product-details__title">
      {product.title}
    </div>
    <div className="product-details__description">
      {product.description}
    </div>
    <div className="product-details__price">
      Price: {product.price}$
    </div>
    <div className="product-details__rating">
      Rating: {product.rating}
    </div>
    <div className="product-details__stock">
      Stock: {product.stock}
    </div>
    <div className="product-details__brand">
      Brand: {product.brand}
    </div>
    <div className="product-details__category">
      Category: {product.category}
    </div>
    <div className="product-details__discount">
      Discount: {product.discountPercentage}%
    </div>
    <div className="product-details__images">
      <ProductImages images={product.images} />
    </div>
  </div>
);

export default ProductDetails;
