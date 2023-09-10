import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Header from './components/header/header.jsx';
import Home from './pages/home/home';
import Series from './pages/series/series'
import Peliculas from './pages/peliculas/peliculas'


function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route
        path="/"
        element={<Home />}
        />
        <Route
        path="/series"
        element={<Series />}
        />
        <Route
        path="/Peliculas" 
        element={<Peliculas />}
        />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
