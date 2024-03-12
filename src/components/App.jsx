import Cars from 'pages/Catalog';
import Favorite from 'pages/Favorite';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Cars />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};
