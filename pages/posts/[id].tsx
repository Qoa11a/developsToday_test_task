import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { IPost, ICommentMainData, IComment } from '@typeDefs/IPost';
import styled from 'styled-components';
import { getPostById, saveNewComment, deletePostById } from '@api/apiPosts';
import { useState, ChangeEvent, MouseEvent } from 'react';
import CreatePost from '@components/CreatePost';
import { confirmAlert } from 'react-confirm-alert';

const Container = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px auto 0;
`;

const Post = styled.div`
  width: 950px;
  margin: 0 auto 50px;
  display: flex;
  flex-direction: column;
  color: #66fcf1;
`;

const Title = styled.h1`
  margin: 0 auto;
  width: 500px;
  text-align: center;
  padding-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
  border-bottom: 1px solid #45a29e;
`;

const Body = styled.p`
  width: 700px;
  margin: 20px auto 0;
  line-height: 1.5;
`;

const Comments = styled.div`
  color: #66fcf1;
  width: 700px;
  margin: 0 auto 10px;
`;

const ComTitle = styled.p`
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 20px;
`;

const Comment = styled.div`
  margin-bottom: 30px;
  border-bottom: 1px solid #45a29e;
  padding-bottom: 5px;
`;

const ComInput = styled.input`
  width: 700px;
  margin: 0 auto 10px;
  box-sizing: border-box;
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

const AddBtn = styled.button`
  width: 700px;
  margin: 0 auto 10px;
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

const EditBtn = styled.button`
  width: 700px;
  margin: 0 auto 10px;
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

const DeleteBtn = styled.button`
  width: 700px;
  margin: 0 auto 10px;
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

// const ShouldDelete = styled.div`
//   color: #45a29e;
// `;
// const DeleteTitle = styled.div`
//   color: #45a29e;
// `;
// const DeleteBody = styled.div`
//   color: #45a29e;
// `;
// const ButtonYes = styled.button`
//   color: #45a29e;
// `;
// const ButtonNo = styled.button`
//   color: #45a29e;
// `;

interface IProps {
  serverPost: IPost;
}

const Posts: NextPage<IProps> = ({ serverPost }) => {
  const router = useRouter();
  const [post, updatePost] = useState<IPost>(serverPost);
  const [comments, updateComments] = useState<IComment[]>(post.comments);
  const [body, updateBody] = useState<string>('');
  const [isEditMode, changeEditMode] = useState<boolean>(false);

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
  const onEditClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changeEditMode(!isEditMode);
  };

  const onUpdatePost = (updatedPost: IPost): void => {
    updatePost(updatedPost);
    changeEditMode(!isEditMode);
  };

  const deletePost = async () => {
    await deletePostById(post.id);
    router.back();
  };

  const onDeleteClickHandler = () => {
    const options = {
      title: `Delete ${post.title}?`,
      message: "Are you sure? You can't undo this action",
      buttons: [
        {
          label: 'Yes',
          onClick: () => deletePost(),
        },
        {
          label: 'No',
          onClick: () => false,
        },
      ],
    };
    confirmAlert(options);

    // const options = {
    //   customUI: () => (
    //     <ShouldDelete>
    //       <DeleteTitle>Delete {post.title}?</DeleteTitle>
    //       <DeleteBody>You want to delete this file?</DeleteBody>
    //       <ButtonYes onClick={() => deletePost()}>Yes</ButtonYes>
    //       <ButtonNo onClick={() => false}>No</ButtonNo>
    //     </ShouldDelete>
    //   ),
    // };
    // confirmAlert(options);
  };

  return (
    <Container>
      {isEditMode ? (
        <CreatePost post={post} onChanged={onUpdatePost} />
      ) : (
        <Post>
          <Title>{post.title}</Title>
          <Body>{post.body}</Body>
        </Post>
      )}

      <Comments>
        <ComTitle>Comments:</ComTitle>
        {comments?.map((comment) => (
          <Comment key={comment.id}>{comment.body}</Comment>
        ))}
      </Comments>
      <ComInput type="text" placeholder="Comment" value={body} onChange={onBodyUpdateHandler} />
      <AddBtn type="button" onClick={onAddClickHandler}>
        Add
      </AddBtn>
      <EditBtn type="button" onClick={onEditClickHandler}>
        Edit
      </EditBtn>
      <DeleteBtn type="button" onClick={onDeleteClickHandler}>
        Delete
      </DeleteBtn>
    </Container>
  );
};

Posts.getInitialProps = async ({ query }) => {
  const res = await getPostById(Number.parseInt(query.id as string, 10));
  return {
    serverPost: res.data,
  };
};

export default Posts;
