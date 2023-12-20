import './styles.scss';
import { IUser } from '@/types/user';
import Image from 'next/image';
import { ICart } from '@/types/cart';
import UserCarts from '../UserCarts';

interface Props {
  user: IUser;
  carts: ICart[];
};

const UserDetails = ({
  user,
  carts,
}: Props): React.ReactElement => (
  <div className="user-details">
    <div className="user-item__image">
      <Image
        src={user.image}
        alt={user.firstName}
        width={200}
        height={200}
      />
    </div>
    <div className="user-details__name">
      {`${user.firstName} ${user.lastName}`}
    </div>
    <div className="user-details__info">
      <div className="user-details__info__username">
        Username: {user.username}
      </div>
      <div className="user-details__info__email">
        Email: {user.email}
      </div>
      <div className="user-details__info__phone">
        Phone: {user.phone}
      </div>
      <div className="user-details__info__bd">
        Birth Date: {user.birthDate}
      </div>
      <div className="user-details__info__gender">
        Gender: {user.gender}
      </div>
      <div className="user-details__info__age">
        Age: {user.age}
      </div>
    </div>
    <div className="user-details__carts">
      <div className="user-details__carts__title">User carts</div>
      <UserCarts carts={carts} />
    </div>
  </div>
);

export default UserDetails;
