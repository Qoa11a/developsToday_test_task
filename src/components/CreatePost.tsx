import { useState, ChangeEvent } from 'react';
import { IPostMainData } from '@typeDefs/IPost';
import { createPost } from '@api/apiPosts';
import styled from 'styled-components';

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
`;

const CreatePost: React.FC = () => {
  const [title, updateTitle] = useState<string>('');
  const [body, updateBody] = useState<string>('');

  const onTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateTitle(e.currentTarget.value);
  };

  const onBodyChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    updateBody(e.currentTarget.value);
  };

  const onSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: IPostMainData = {
      title,
      body,
    };
    createPost(payload);
    updateTitle('');
    updateBody('');
  };

  return (
    <Form method="post" onSubmit={onSubmitHandler}>
      <input type="text" placeholder="Title" value={title} onChange={onTitleChangeHandler} />
      <textarea placeholder="Post" value={body} onChange={onBodyChangeHandler} />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default CreatePost;
