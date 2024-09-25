import Home from './components/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ProductPage from './components/ProductPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='*' element={<Navigate to="/" />} />
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
