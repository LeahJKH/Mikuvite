import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import LayoutBase from './pages/layout/LayoutBase';
import Timeline from './pages/timeline/Timeline';

import './App.css';

function App() {  
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutBase />}>
              <Route index element={<Home />} />
              <Route path="/timeline" element={<Timeline/>} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
