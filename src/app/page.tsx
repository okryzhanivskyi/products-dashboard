import { DashboardService } from '@/services/DashboardService';
import ProductList from '@/components/products/ProductList';

const DashboardPage = async () => {
  const data = await DashboardService.getData();

  return (
    <div>
      <ProductList title="Top rating products" products={data.topRatingProducts} />
      <ProductList title="Low rating products" products={data.lowRatingProducts} />
      <ProductList title="Leavings" products={data.lowQuantityProducts} />
    </div>
  )
}

export default DashboardPage;
