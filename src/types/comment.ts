export interface ICommentUser {
  id: number,
  username: string,
}

export interface IComment {
  id: number,
  body: string,
  postId: number,
  user: ICommentUser,
};

export type ICommentsResult = {
  comments: IComment[],
  total: number,
  skip: number,
  limit: number,
};
