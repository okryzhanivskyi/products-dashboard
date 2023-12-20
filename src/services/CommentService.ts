import { apiGet } from '@/config/api';
import { IComment } from '@/types/comment';
import endpoints from '@/config/api/endpoints';

const endpoint = endpoints.comments;

export const CommentService = {
  async getAll(): Promise<IComment[]> {
    const data = await apiGet<IComment[]>(endpoint.all());
    return data;
  },
  async getById(id: number): Promise<IComment> {
    const data = await apiGet<IComment>(endpoint.byId(id));
    return data;
  },
  async getAllByPostId(postId: number): Promise<IComment[] | null> {
    const data = await apiGet<IComment[]>(endpoint.postComments(postId));
    return data;
  },
  async getAllByUserId(userId: number): Promise<IComment[] | null> {
    const data = await apiGet<IComment[]>(endpoint.all());
    return data.filter((el: IComment) => el.user.id === userId);
  },
};
