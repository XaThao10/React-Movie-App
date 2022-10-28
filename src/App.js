import { Routes, Route  } from 'react-router-dom';
import AllMovies from './pages/AllMovies';
import NewMovie from './pages/NewMovies';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
      <Layout>
      <Routes>
      <Route path='/' exact={true} element={<AllMovies />} />
      <Route path='/new-movie' element={<NewMovie />} />
      <Route path='/favorites' element={<Favorites />} />
      </Routes>
      </Layout>
    </>
  );
}

export default App;
