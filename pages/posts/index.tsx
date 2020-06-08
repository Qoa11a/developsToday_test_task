import { GetServerSideProps, NextPage } from 'next';
import { getPosts } from '@api/apiPosts';
import { IPost } from '@typeDefs/IPost';
import PostList from '@components/PostList';
import styled from 'styled-components';

export interface IProps {
  posts: IPost[];
}

const Container = styled.div`
  width: 1000px;
  margin: auto;
`;

const Posts: NextPage<IProps> = ({ posts }) => {
  return (
    <Container>
      <PostList posts={posts} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  const res = await getPosts();
  const posts = res.data;

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
