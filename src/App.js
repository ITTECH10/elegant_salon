import {Switch, Route} from 'react-router-dom'

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ponuda" component={Vehicles} />
      </Switch>
    </Layout>
  );
}

export default App;
