
import { Route, Routes } from 'react-router-dom';
import s from './App.module.scss';
import { Homepage } from './components/pages/Homepage'
import { Blogpage } from './components/pages/Blogepage';
import { Aboutpage } from './components/pages/Aboutpage'
import { Nature } from './components/pages/Nature';
import { Technology } from './components/pages/Technology';
import { Healthy } from './components/pages/Healthy';
import { Family } from './components/pages/Family';
import { Layout } from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="blogpage/*" element={<Blogpage />} />
          <Route path="aboutpage" element={<Aboutpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
