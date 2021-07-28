import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import getClassificacaoPorAnoEndpoint from '../api/api';

const HEADERS_TABLE = ['Nome', 'P', 'V', 'E', 'D', 'GP', 'GC', 'S'];

function App() {
  const [classificacao, setClassificacao] = useState(null);

  useEffect(() => {
    getClassificacaoPorAnoEndpoint().then(res => setClassificacao(res));
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/serie-a/:year">
          <table>
            <thead>
              {HEADERS_TABLE.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </thead>
            <tbody>
              {classificacao.map((time, indexT) => (
                <tr key={indexT}>
                  <td>{time.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Route>
        <Redirect to={{ pathname: `serie-a/${'teste'}` }} />
      </Switch>
    </Router>
  );
}

export default App;
