import styled from 'styled-components';
import Navigation from './Navigation';

const Container = styled.div`
  color: white;
  background-color: #444447;
  opacity: 90%;
  height: 100px;
  padding: 30px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
`;

const Header = (): JSX.Element => (
  <Container>
    <Title>Blog App</Title>
    <Navigation />
  </Container>
);

export default Header;
