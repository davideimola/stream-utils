import styled from '@emotion/styled';
import { Footer } from '../components/footer';

const Main = styled.div``;

const Scene = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr auto;
`;

export default function Home() {
  return (
      <Scene className="bg-gray-300">
          <Main/>
          <Footer/>
      </Scene>
  );
}
