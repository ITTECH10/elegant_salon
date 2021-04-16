import {Switch, Route} from 'react-router-dom'

import Layout from './components/Layout/Layout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProfileAndHistory from './pages/ProfileAndHistory';
import Vehicles from './pages/Vehicles';
import VehicleSingle from './pages/VehicleSingle';

import Footer from './components/Layout/Footer/Footer';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ponuda" component={Vehicles} />
        <Route path="/povijest" component={ProfileAndHistory} />
        <Route path="/kontakt" component={Contact} />
        <Route path="/vozilo/:id" component={VehicleSingle} />
      </Switch>
      <Footer />
    </Layout>
  );
}

export default App;
