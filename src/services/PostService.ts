import { apiGet } from '@/config/api';
import { IPost, IPostsResult } from '@/types/post';
import endpoints from '@/config/api/endpoints';
import { IComment, ICommentsResult } from '@/types/comment';

const endpoint = endpoints.posts;

export const PostService = {
  async getAll(): Promise<IPostsResult> {
    const data = await apiGet<IPostsResult>(endpoint.all());
    return data;
  },
  async getById(id: number): Promise<IPost> {
    const data = await apiGet<IPost>(endpoint.byId(id));
    return data;
  },
  async getByUserId(userId: number): Promise<IPost | null> {
    const data = await apiGet<IPost>(endpoint.byUserId(userId));
    return data;
  },
  async getByTags(tag: string): Promise<IPost[] | null> {
    const data = await apiGet<IPost[]>(endpoint.all());
    return data.filter((el: IPost) => el.tags.includes(tag));
  },
  async getComments(postId: number): Promise<ICommentsResult> {
    const data = await apiGet<ICommentsResult>(endpoint.comments(postId));
    return data;
  },
};
