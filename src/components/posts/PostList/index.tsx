import './styles.scss';
import PostItem from "../PostItem";
import { IPost } from '@/types/post';

interface Props {
  posts: IPost[],
};

const PostsList = ({
  posts,
}: Props): React.ReactElement => (
  <div className="posts-list">
    <div className="posts-list__items">
      { posts.map((el, index) => <PostItem key={`posts-list-item${index}`} post={el} />)}
    </div>
  </div>
);

export default PostsList;
