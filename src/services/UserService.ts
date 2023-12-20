import { apiGet } from '@/config/api';
import endpoints from '@/config/api/endpoints';
import { ICartsResult } from '@/types/cart';
import { IUser, IUsersResult } from '@/types/user';

const endpoint = endpoints.users;

export const UserService = {
  async getAll(): Promise<IUsersResult> {
    const data = await apiGet<IUsersResult>(endpoint.all());
    return data;
  },
  async getById(id: number): Promise<IUser> {
    const data = await apiGet<IUser>(endpoint.byId(id));
    return data;
  },
  async search(searchString: string) {
    const data = await apiGet<IUser>(endpoint.search(searchString));
    return data;
  },
  async getUserCarts(userId: number) {
    const data = await apiGet<ICartsResult>(endpoint.carts(userId));
    return data;
  },
};
