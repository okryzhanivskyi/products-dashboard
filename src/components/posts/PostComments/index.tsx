import { IComment } from '@/types/comment';

interface Props {
  comments: IComment[];
};

const PostComments = ({
  comments,
}: Props): React.ReactElement => (
  <>
    {comments.map(el => (
      <div className="post-details__comments__items__item">
        <div className="post-details__comments__items__item__author">
          { el.user.username }
        </div>
        <div className="post-details__comments__items__item__text">
          { el.body }
        </div>
      </div>
    ))}
  </>
);

export default PostComments;
