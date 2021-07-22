import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import getClassificacaoPorAnoEndpoint from '../api/api';

function App() {
  const [classificacao, setClassificacao] = useState(null);

  useEffect(() => {
    getClassificacaoPorAnoEndpoint().then(res => console.log(res));
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/serie-a/:year">
          <p>Opa</p>
        </Route>
        <Redirect to={{ pathname: `serie-a/${'teste'}` }} />
      </Switch>
    </Router>
  );
}

export default App;
