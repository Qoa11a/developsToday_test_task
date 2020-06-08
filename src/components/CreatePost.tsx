import { useState, ChangeEvent } from 'react';
import { IPostMainData, IPost } from '@typeDefs/IPost';
import { createPost, updatePost } from '@api/apiPosts';
import styled from 'styled-components';

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  outline: none;
  color: #45a29e;
  border: 1px solid #45a29e;
  background-color: #0b0c10;
  border-radius: 5px;
  height: 30px;
  margin-bottom: 10px;
  padding-left: 10px;
  :focus {
    border-color: #69faf4;
  }
`;

const TextArea = styled.textarea`
  outline: none;
  color: #45a29e;
  border: 1px solid #45a29e;
  background-color: #0b0c10;
  border-radius: 5px;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px 0 0 10px;
  :focus {
    border-color: #69faf4;
  }
`;

const Button = styled.button`
  outline: none;
  color: #45a29e;
  background-color: #0b0c10;
  border: 1px solid #45a29e;
  border-radius: 15px;
  font-weight: bold;
  transition: color 0.3s, border-color 0.3s;
  height: 50px;
  :focus,
  :hover {
    cursor: pointer;
    color: #69faf4;
    border-color: #69faf4;
  }
`;

interface IProps {
  post?: IPost;
  onChanged?: (post: IPost) => void;
}

const CreatePost: React.FC<IProps> = ({ post, onChanged }) => {
  const [title, updateTitle] = useState<string>(post?.title ?? '');
  const [body, updateBody] = useState<string>(post?.body ?? '');

  const onTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateTitle(e.currentTarget.value);
  };

  const onBodyChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    updateBody(e.currentTarget.value);
  };

  const savePost = async () => {
    const payload: IPostMainData = {
      title,
      body,
    };
    if (post) {
      const res = await updatePost(payload, post.id);
      if (onChanged) {
        onChanged(res.data);
      }
    } else {
      await createPost(payload);
      updateTitle('');
      updateBody('');
    }
  };

  const onSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    savePost();
  };

  return (
    <Form method="post" onSubmit={onSubmitHandler}>
      <Input required type="text" placeholder="Title" value={title} onChange={onTitleChangeHandler} />
      <TextArea required placeholder="Post" value={body} onChange={onBodyChangeHandler} />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default CreatePost;
