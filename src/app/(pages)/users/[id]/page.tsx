import { UserService } from '@/services/UserService';
import UserDetails from '@/components/users/UserDetails';
import { IUrlParams } from '@/types/routing';

const UserDetailsPage = async ({ params }: IUrlParams) => {
  const userId = Number(params.id);
  const data = await UserService.getById(userId);
  const cartsData = await UserService.getUserCarts(userId);
  
  return <UserDetails user={data} carts={cartsData.carts} />;
}

export default UserDetailsPage;

export async function generateStaticParams() {
  const data = await UserService.getAll();
 
  return data.users.map((user) => ({
    id: String(user.id),
  }))
};
