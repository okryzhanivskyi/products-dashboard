import { IProduct } from './product';

export interface DashboardData {
  lowRatingProducts: IProduct[];
  topRatingProducts: IProduct[];
  lowQuantityProducts: IProduct[];
};
