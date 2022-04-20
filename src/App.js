import { Route, Routes } from 'react-router-dom';
import AuthRoute from '@/components/AuthRoute';
import Layout from '@/pages/Layout';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Home from '@/pages/Home';
import Article from '@/pages/Article';
import Publish from '@/pages/Publish';
import NotFound from '@/pages/NotFound';
import Agreement from '@/pages/Agreement';
import './App.css'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={
          <AuthRoute>
            <Layout />
          </AuthRoute>
        }>
          <Route index element={<Home />} />
          <Route path='article' element={<Article />} />
          <Route path='publish' element={<Publish />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/agreement' element={<Agreement />} />
      </Routes>
    </div>
  );
}
