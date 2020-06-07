import { NextPage } from 'next';
import { IPost, ICommentMainData, IComment } from '@typeDefs/IPost';
import styled from 'styled-components';
import { getPostById, saveNewComment } from '@api/apiPosts';
import { useState, ChangeEvent, MouseEvent } from 'react';

const Container = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px auto 0;
`;

const Post = styled.div`
  width: 750px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

interface IProps {
  post: IPost;
}

const Posts: NextPage<IProps> = ({ post }) => {
  const [comments, updateComments] = useState<IComment[]>(post.comments);
  const [body, updateBody] = useState<string>('');

  const saveComment = async (payload: ICommentMainData) => {
    const res = await saveNewComment(payload);
    const newComment = res.data;
    if (comments) {
      updateComments([...comments, newComment]);
    } else {
      updateComments([newComment]);
    }
    updateBody('');
  };

  const onBodyUpdateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateBody(e.currentTarget.value);
  };
  const onAddClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const payload: ICommentMainData = {
      postId: post.id,
      body,
    };
    saveComment(payload);
  };

  return (
    <Container>
      <Post>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </Post>
      <div>
        {comments?.map((comment) => (
          <div key={comment.id}>{comment.body}</div>
        ))}
      </div>
      <input type="text" placeholder="Comment" value={body} onChange={onBodyUpdateHandler} />
      <button type="button" onClick={onAddClickHandler}>
        Add
      </button>
    </Container>
  );
};

Posts.getInitialProps = async ({ query }) => {
  const res = await getPostById(Number.parseInt(query.id as string, 10));
  return {
    post: res.data,
  };
};

export default Posts;
