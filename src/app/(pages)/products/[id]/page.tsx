import { ProductService } from '@/services/ProductService';
import ProductDetails from '@/components/products/ProductDetails';
import { IUrlParams } from '@/types/routing';

const ProductDetailsPage = async ({ params }: IUrlParams) => {
  const data = await ProductService.getById(Number(params.id));
  
  return <ProductDetails product={data} />;
}

export default ProductDetailsPage;

export async function generateStaticParams() {
  const data = await ProductService.getAll();
 
  return data.products.map((product) => ({
    id: String(product.id),
  }))
};
