import {Switch, Route} from 'react-router-dom'

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import ProfileAndHistory from './pages/ProfileAndHistory';
import Vehicles from './pages/Vehicles';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ponuda" component={Vehicles} />
        <Route path="/povijest" component={ProfileAndHistory} />
      </Switch>
    </Layout>
  );
}

export default App;
