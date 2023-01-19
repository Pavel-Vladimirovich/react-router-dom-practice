
import { Route, Routes } from 'react-router-dom';
import s from './App.module.scss';
import { Homepage } from './components/pages/Homepage'
import { Blogpage } from './components/pages/Blogepage';
import { Aboutpage } from './components/pages/Aboutpage'
import { Layout } from './components/Layout';
import { SinglePage } from './components/pages/Singlpage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="blogpage/*" element={<Blogpage />} />
          <Route path="aboutpage" element={<Aboutpage />} />
          <Route path="aboutpage/:id" element={<SinglePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
