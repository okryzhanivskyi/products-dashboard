import './styles.scss';
import UserItem from "../UserItem";
import { IUser } from '@/types/user';

interface Props {
  users: IUser[],
};

const UserList = ({
  users,
}: Props): React.ReactElement => (
  <div className="user-list">
    <div className="user-list__items">
      { users.map((el, index) => <UserItem key={`user-list-item${index}`} user={el} />)}
    </div>
  </div>
);

export default UserList;
