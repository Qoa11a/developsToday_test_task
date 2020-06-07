import { GetStaticProps, NextPage } from 'next';
import { IPost } from '@typeDefs/IPost';
import { getPosts } from '@api/apiPosts';
import PostCard from '@components/PostCard';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

interface IProps {
  posts: IPost[];
}

const Home: NextPage<IProps> = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </Container>
  );
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const res = await getPosts();
  const posts = res.data;

  return {
    props: {
      posts: posts.slice(0, 10),
    },
  };
};

export default Home;
