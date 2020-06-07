import { AxiosResponse } from 'axios';

import { IPost, IPostMainData, IComment, ICommentMainData } from '@typeDefs/IPost';
import api from './index';

export const getPosts = async (): Promise<AxiosResponse<IPost[]>> => {
  return api.get('posts');
};

export const getPostById = async (id: number): Promise<AxiosResponse<IPost>> => {
  return api.get(`posts/${id}`, {
    params: {
      _embed: 'comments',
    },
  });
};

export const createPost = async (payload: IPostMainData): Promise<AxiosResponse<IPost>> => {
  return api.post('posts', payload);
};

export const saveNewComment = async (payload: ICommentMainData): Promise<AxiosResponse<IComment>> => {
  return api.post('comments', payload);
};
