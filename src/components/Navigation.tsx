import styled from 'styled-components';
import Link from './Link';

const Nav = styled.div`
  display: flex;
  justify-content: center;
  width: 940px;
  margin: 60px auto;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  height: 40px;
`;

const A = styled.a`
  text-decoration: none;
`;

const ListItem = styled.li`
  font-weight: bold;
  display: flex;
  position: relative;

  ::after {
    content: '';
    width: 0;
    opacity: 0;
    height: 2px;
    background: #66fcf1;
    transition: width 0.3s, opacity 0s;
    transition-delay: 0s, 0.3s;
    position: absolute;
    border-radius: 15px;
    bottom: 0;
    left: 0;
  }
  :hover::after {
    width: 100%;
    opacity: 1;
    transition-delay: 0s, 0s;
  }
  :hover {
    cursor: pointer;
  }
`;

const Navigation = (): JSX.Element => (
  <Nav>
    <List>
      <ListItem>
        <Link href="/" activeClassName="active">
          <A>Home Page</A>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/posts" activeClassName="active">
          <A>All Posts</A>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/posts/new" activeClassName="active">
          <A>Create a New Post</A>
        </Link>
      </ListItem>
    </List>
  </Nav>
);

export default Navigation;
