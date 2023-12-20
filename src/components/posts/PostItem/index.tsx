import './styles.scss';
import Image from 'next/image';
import Link from 'next/link';
import { POSTS_BASE_URL } from '@/config/api/endpoints';
import { IPost } from '@/types/post';

interface Props {
  post: IPost,
};

export const renderTags = (tags: string[]) => {
  return tags.map(tag => (
    <span className="post-item__tags__tag">
      { tag }
    </span>
  ))
};

const PostItem = ({
  post
}: Props): React.ReactElement => (
    <div className="post-item">
      <Link href={`${POSTS_BASE_URL}/${post.id}`}>
      <div className="post-item__title">{ post.title }</div>
      <div className="post-item__body">{ post.body}</div>
      <div className="post-item__tags">
        Tags: { renderTags(post.tags) }
      </div>
      <div className="post-item__reactions">Reactions: { post.reactions }</div>
      </Link>
    </div>
);

export default PostItem;