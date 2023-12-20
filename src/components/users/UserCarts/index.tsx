import './styles.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ICart } from '@/types/cart';
import { PRODUCTS_BASE_URL } from '@/config/api/endpoints';

interface Props {
  carts: ICart[],
};

const UserCarts = ({
  carts
}: Props): React.ReactElement => (
    <div className="user-item__carts">
        {carts.map(cart => (
        <div className="user-item__carts__item">
          <div className="user-item__carts__item__title">
            Cart ID: { cart.id }
          </div>
          <div className="user-item__carts__item__products">
            {cart.products.map(product => (
                <div className="user-item__carts__item__product">
                  <Link href={`${PRODUCTS_BASE_URL}/${product.id}`}>
                  <div className="user-item__carts__item__product__image">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="user-item__carts__item__product__title">
                    Title: { product.title }
                  </div>
                  <div className="user-item__carts__item__product__price">
                    Price: { product.price }
                  </div>
                  <div className="user-item__carts__item__product__quantity">
                    Quantity: { product.quantity }
                  </div>
                  <div className="user-item__carts__item__product__total">
                    Total: { product.total }
                  </div>
                  <div className="user-item__carts__item__product__discount">
                    Discount: { product.discountPercentage }
                  </div>
                  <div className="user-item__carts__item__product__discount-price">
                    Discount price: { product.discountedPrice }
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
);

export default UserCarts;
