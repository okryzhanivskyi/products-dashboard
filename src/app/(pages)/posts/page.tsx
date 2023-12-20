import { PostService } from '@/services/PostService';
import PostList from '@/components/posts/PostList';

const PostsPage = async () => {
  const data = await PostService.getAll();

  return (
    <div>
      <PostList posts={data.posts} />
    </div>
  )
}

export default PostsPage;
