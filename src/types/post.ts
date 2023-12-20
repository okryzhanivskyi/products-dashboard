export interface IPost {
  id: number,
  title: string,
  body: string,
  userId: number,
  tags: string[],
  reactions: number,
};

export type IPostsResult = {
  posts: IPost[],
  total: number,
  skip: number,
  limit: number,
};
