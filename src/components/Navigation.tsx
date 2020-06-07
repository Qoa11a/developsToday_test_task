import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 800px;
`;

const A = styled.a`
  text-decoration: none;
  ::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #89939a;
    transition: width 0.3s;
  }
  :hover::after {
    width: 100%;
  }
  :hover {
    cursor: pointer;
  }
`;

const ListItem = styled.li`
  font-weight: bold;
`;

const Navigation = (): JSX.Element => (
  <Nav>
    <List>
      <ListItem>
        <Link href="/">
          <A>Home Page</A>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/posts">
          <A>All Posts</A>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/posts/new">
          <A>Create a New Post</A>
        </Link>
      </ListItem>
    </List>
  </Nav>
);

export default Navigation;
