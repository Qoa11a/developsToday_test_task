import styled from 'styled-components';
import Navigation from './Navigation';

const Container = styled.div`
  color: #66fcf1;
  background-color: #0b0c10;
  height: 100px;
  padding: 30px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  margin: auto;
  font-size: 30px;
  width: 1000px;
`;

const Header = (): JSX.Element => (
  <Container>
    <Title>Blog App</Title>
    <Navigation />
  </Container>
);

export default Header;
