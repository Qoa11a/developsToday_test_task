import { IPost } from '@typeDefs/IPost';
import styled from 'styled-components';
import PostCard from './PostCard';

export interface IProps {
  posts: IPost[];
}

const Container = styled.div`
  display: grid;
  grid-template:
    'a a a'
    'b b b';
  margin-top: 30px;
  justify-items: center;
`;

const PostList: React.FC<IProps> = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </Container>
  );
};

export default PostList;
