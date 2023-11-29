
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './components/pages/Homepage'
import { Blogpage } from './components/pages/Blogepage';
import { AboutPage } from './components/pages/AboutPage'
import { Layout } from './components/Layout';
import { SinglePage } from './components/pages/Singlpage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="blogpage/*" element={<Blogpage />} />
          <Route path="aboutpage" element={<AboutPage />} />
          <Route path="aboutpage/:id" element={<SinglePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
