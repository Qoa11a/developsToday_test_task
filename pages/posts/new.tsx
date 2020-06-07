import CreatePost from '@components/CreatePost';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const CreateNew: React.FC = () => {
  return (
    <Container>
      <CreatePost />
    </Container>
  );
};

export default CreateNew;
