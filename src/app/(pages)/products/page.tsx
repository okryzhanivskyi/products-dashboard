import { ProductService } from '@/services/ProductService';
import ProductList from '@/components/products/ProductList';

const ProductsPage = async () => {
  const data = await ProductService.getAll();

  return (
    <div>
      <ProductList title="All products" products={data.products} />
    </div>
  )
}

export default ProductsPage;
