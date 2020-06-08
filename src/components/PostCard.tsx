import { IPost } from '@typeDefs/IPost';
import Link from 'next/link';
import styled from 'styled-components';

const Card = styled.div`
  width: 250px;
  height: 100px;
  border: 2px solid #45a29e;
  background-color: #0b0c10;
  margin-top: 10px;
  color: #45a29e;
  transition: color 0.3s, border-color 0.3s;
  padding: 10px;
  border-radius: 8px;
  :hover {
    cursor: pointer;
    color: #69faf4;
    border-color: #69faf4;
  }
`;

const A = styled.a`
  text-decoration: none;
`;

interface IProps {
  post: IPost;
}

const PostCard: React.FC<IProps> = ({ post }) => {
  return (
    <Link href="/posts/[id]" as={`/posts/${post.id}`}>
      <Card>
        <A>
          <h3>{post.title}</h3>
        </A>
      </Card>
    </Link>
  );
};

export default PostCard;
