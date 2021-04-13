import {Switch, Route} from 'react-router-dom'

import Layout from './components/Layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
