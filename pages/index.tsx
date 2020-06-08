import { GetStaticProps, NextPage } from 'next';
import { IPost } from '@typeDefs/IPost';
import { getPosts } from '@api/apiPosts';
import PostList from '@components/PostList';
import styled from 'styled-components';

export interface IProps {
  posts: IPost[];
}

const Container = styled.div`
  width: 1000px;
  margin: auto;
`;

const Home: NextPage<IProps> = ({ posts }) => {
  return (
    <Container>
      <PostList posts={posts} />
    </Container>
  );
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const res = await getPosts();
  const posts = res.data;

  return {
    props: {
      posts: posts.sort((a, b) => b.id - a.id).slice(0, 10),
    },
  };
};

export default Home;
