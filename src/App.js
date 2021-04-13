import Appbar from './components/Layout/Appbar/Appbar'
import InfoDashboard from './components/Layout/Dashboard/InfoDashboard'
import Layout from './components/Layout/Layout';
import SearchVehicles from './components/Layout/Search/SearchVehicles';
import Slogan from './components/Layout/Slogan/Slogan'
import SloganTitle from './components/Layout/Slogan/SloganTitle';

function App() {
  return (
    <Layout>
      <InfoDashboard />
      <Appbar />
      <Slogan title="Ti Voziš. Ti Biraš." />
      <SearchVehicles />
      <SloganTitle />
    </Layout>
  );
}

export default App;
