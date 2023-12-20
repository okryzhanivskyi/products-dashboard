import './styles.scss';
import { IPost } from '@/types/post';
import { renderTags } from '../PostItem';
import { IComment } from '@/types/comment';
import PostComments from '../PostComments';

interface Props {
  post: IPost;
  comments: IComment[];
};

const PostDetails = ({
  post,
  comments,
}: Props): React.ReactElement => (
  <div className="post-details">
    <div className="post-details__title">
      {post.title}
    </div>
    <div className="post-details__body">
      {post.body}
    </div>
    <div className="post-details__tags">
      Tags: { renderTags(post.tags) }
    </div>
    <div className="post-details__reactions">
      Reactions: { post.reactions }
    </div>
    <div className="post-details__comments">
      <div className="post-details__comments__title">Comments</div>
      <div className="post-details__comments__items">
        <PostComments comments={comments} />
      </div>
    </div>
  </div>
);

export default PostDetails;
