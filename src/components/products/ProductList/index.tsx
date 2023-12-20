import './styles.scss';
import { IProduct } from "@/types/product";
import ProductItem from "../ProductItem";

interface Props {
  products: IProduct[],
  title: string,
};

const ProductList = ({
  products,
  title,
}: Props): React.ReactElement => (
  <div className="products-list">
    <div className="products-list__title">
      {title}
    </div>
    <div className="products-list__items">
      { products.map((el, index) => <ProductItem key={`product-list-item${index}`} product={el} />)}
    </div>
  </div>
);

export default ProductList;
