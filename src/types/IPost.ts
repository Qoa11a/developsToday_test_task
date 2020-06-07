export interface ICommentMainData {
  postId: number;
  body: string;
}

export interface IComment extends ICommentMainData {
  id: number;
}

export interface IPostMainData {
  title: string;
  body: string;
  comments?: IComment[];
}

export interface IPost extends IPostMainData {
  id: number;
}
