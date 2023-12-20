export interface ICartProduct {
  id: number,
  title: string,
  price: number,
  quantity: number,
  total: number,
  discountPercentage: number,
  discountedPrice: number,
  thumbnail: string,
};

export interface ICart {
  id: number,
  products: ICartProduct[],
};

export type ICartsResult = {
  carts: ICart[],
  total: number,
  skip: number,
  limit: number,
};
