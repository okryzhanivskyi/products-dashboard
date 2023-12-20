import './styles.scss';
import Image from 'next/image';
import Link from 'next/link';
import { USERS_BASE_URL } from '@/config/api/endpoints';
import { IUser } from '@/types/user';

interface Props {
  user: IUser,
};

const UserItem = ({
  user
}: Props): React.ReactElement => (
    <div className="user-item">
      <Link href={`${USERS_BASE_URL}/${user.id}`}>
        <div className="user-item__image">
          <Image
            src={user.image}
            alt={user.firstName}
            width={200}
            height={200}
          />
        </div>
        <div className="user-item__name">
          {`${user.firstName} ${user.lastName}`}
        </div>
        <div className="user-item__username">
          Username: {user.username}
        </div>
        <div className="user-item__email">
          Email: {user.email}
        </div>
      </Link>
    </div>
);

export default UserItem;