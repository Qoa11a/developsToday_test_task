import '@styles/reset.css';
import '@styles/generalStyles.css';
import { AppProps } from 'next/app';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styled from 'styled-components';

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Container = styled.div`
  padding-bottom: 150px;
`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <PageContainer>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
      <Footer />
    </PageContainer>
  );
}

export default MyApp;
