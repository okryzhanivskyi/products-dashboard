import { apiGet } from '@/config/api';
import endpoints from '@/config/api/endpoints';
import { ICart } from '@/types/cart';

const endpoint = endpoints.carts;

export const CartService = {
  async getAll() {
    const data = await apiGet<ICart[]>(endpoint.all());
    return data;
  },
  async getById(id: number) {
    const data = await apiGet<ICart[]>(endpoint.byId(id));
    return data;
  },
  async userCarts(userId: number) {
    const data = await apiGet<ICart[]>(endpoint.userCarts(userId));
    return data;
  },
};
