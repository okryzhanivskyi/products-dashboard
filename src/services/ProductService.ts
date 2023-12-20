import { apiGet } from '@/config/api';
import endpoints from '@/config/api/endpoints';
import { IProduct, IProductsResult } from '@/types/product';

const endpoint = endpoints.products;

export const ProductService = {
  async getAll(): Promise<IProductsResult> {
    const data = await apiGet<IProductsResult>(endpoint.all());
    return data;
  },
  async getById(id: number) {
    const data = await apiGet<IProduct>(endpoint.byId(id));
    return data;
  },
  async search(searchString: string) {
    const data = await apiGet<IProduct>(endpoint.search(searchString));
    return data;
  },
  async getCategories(): Promise<string[]> {
    const data = await apiGet<string[]>(endpoint.categories());
    return data;
  },
  async getCategoryProducts(category: string) {
    const data = await apiGet<IProduct[]>(endpoint.categoryItems(category));
    return data;
  },
  async getByRating(limit: number, lowFirst: boolean = false) {
    const data = await this.getAll();

    const sortedData = data.products
      .sort((a, b) => lowFirst ? a.rating - b.rating : b.rating - a.rating)
      .slice(0, limit);

    return sortedData;
  },
  async getByQuantityInStock(limit: number) {
    const data = await this.getAll();

    const sortedData = data.products
      .sort((a, b) => b.stock - a.stock)
      .slice(0, limit);

    return sortedData;
  },
};
