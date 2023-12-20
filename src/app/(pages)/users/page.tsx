import { UserService } from '@/services/UserService';
import UserList from '@/components/users/UserList';

const UsersPage = async () => {
  const data = await UserService.getAll();
  
  return <UserList users={data.users} />
}

export default UsersPage;
