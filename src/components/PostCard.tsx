import { IPost } from '@typeDefs/IPost';
import Link from 'next/link';
import styled from 'styled-components';

const Card = styled.div`
  width: 250px;
  height: 100px;
  border: 2px solid #45a29e;
  overflow: hidden;
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

const PostTitle = styled.h3`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  border-bottom: 1px solid #45a29e;
  word-wrap: break-word;
`;

const PostBody = styled.div`
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

interface IProps {
  post: IPost;
}

const PostCard: React.FC<IProps> = ({ post }) => {
  return (
    <Link href="/posts/[id]" as={`/posts/${post.id}`}>
      <Card>
        <A>
          <PostTitle>{post.title}</PostTitle>
          <PostBody>{post.body}</PostBody>
        </A>
      </Card>
    </Link>
  );
};

export default PostCard;
