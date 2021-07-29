import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { classificacaoContext } from '../api/contexts/classificacaoContext';
import getClassificacaoPorAnoEndpoint from '../api/api';
import HeaderComponent from '../atoms/HeaderComponent';
import styled from 'styled-components';
import CampeonatoComponent from './CampeonatoComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function App() {
  const [classificacao, setClassificacao] = useState(null);

  useEffect(() => {
    getClassificacaoPorAnoEndpoint().then(res => setClassificacao(res));
  }, []);

  if (!classificacao) {
    return <p>Carregando...</p>;
  } else {
    return (
      <classificacaoContext.Provider value={{ classificacao }}>
        <Router>
          <Switch>
            <Route path="/serie-a/:year">
              <Container>
                <HeaderComponent titulo="Classificação do Campeonato Brasileiro 2003" />
                <CampeonatoComponent />
              </Container>
            </Route>
            <Redirect to={{ pathname: `serie-a/${'2003'}` }} />
          </Switch>
        </Router>
      </classificacaoContext.Provider>
    );
  }
}

export default App;
