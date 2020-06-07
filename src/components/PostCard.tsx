import { IPost } from '@typeDefs/IPost';
import Link from 'next/link';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  height: 100px;
  border: 2px solid black;
  padding: 10px;
  margin: 50px;
  border-radius: 8px;
`;

interface IProps {
  post: IPost;
}

const PostCard: React.FC<IProps> = ({ post }) => {
  return (
    <Card>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <a>
          <h3>{post.title}</h3>
        </a>
      </Link>
    </Card>
  );
};

export default PostCard;
