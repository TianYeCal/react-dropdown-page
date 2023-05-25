import styled from "styled-components";
import Hero from "./Hero";
import Nav from "./Nav";
import Modal from "./Modal";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <Wrapper>
        <Modal />
        <Nav />
        <Hero />
      </Wrapper>
    </AppProvider>
  );
}
const Wrapper = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  padding: 1.5rem 2rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
export default App;
