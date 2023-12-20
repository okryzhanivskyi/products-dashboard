import { ProductService } from '@/services/ProductService';
import { DashboardData } from '@/types/dashboard';

export const DashboardService = {
  async getData(): Promise<DashboardData> {
    const [
      lowRatingProducts,
      topRatingProducts,
      lowQuantityProducts,
    ] = await Promise.all([
      ProductService.getByRating(7, true),
      ProductService.getByRating(7),
      ProductService.getByQuantityInStock(7),
    ]);

    return {
      lowRatingProducts,
      topRatingProducts,
      lowQuantityProducts,
    };
  },
};
