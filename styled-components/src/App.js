import styled from 'styled-components';
import GlobalStyle from './styles/global';

// Componente título que estiliza a tag h1
const Titulo = styled.h1`
  font-size: 1.6em;
  color: purple;
`;


// Componente título que estiliza a tag h3
const Subtitulo = styled.h3`
  font-size: 1.3em;
  color: gray;
`;


// Componente conteúdo que estiliza a tag div
const Counteudo = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding: 5px;
`;

const App = () => (
  <Counteudo>
    <Titulo>ReactJS</Titulo>
    <Subtitulo>Utilizando Styled Components</Subtitulo>
    <GlobalStyle />
  </Counteudo>
);


export default App;
