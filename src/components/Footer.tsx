import styled from 'styled-components';

const Container = styled.div`
  height: 100px;
  background-color: #0b0c10;
  color: #66fcf1;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
`;

const Footer = (): JSX.Element => (
  <Container>
    <Title>Footer</Title>
  </Container>
);

export default Footer;
