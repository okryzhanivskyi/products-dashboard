import { PostService } from '@/services/PostService';
import PostDetails from '@/components/posts/PostDetails';
import { IUrlParams } from '@/types/routing';

const ProductDetailsPage = async ({ params }: IUrlParams) => {
  const postId = Number(params.id);

  const data = await PostService.getById(postId);
  const postCommentsResult = await PostService.getComments(postId);
  
  return <PostDetails post={data} comments={postCommentsResult.comments} />;
}

export default ProductDetailsPage;

export async function generateStaticParams() {
  const data = await PostService.getAll();
 
  return data.posts.map((post) => ({
    id: String(post.id),
  }))
};
