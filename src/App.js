import './App.css';
import './colors.css';
import Header from './components/header/Header';
import { useState } from 'react';
import Home from './pages/home/Home';
import Docs from './pages/docs/Docs';

function App() {

  const pages = ["Home", "Docs", "Tutorials", "Contect Us"];
  const [currentPage, SetCurrentPage] = useState("Home");

  return (
    <div className="App">
      {/* <Header pages={pages} setPage={SetCurrentPage}/> */}
      {
        currentPage === "Home" && <Home/>
      }
      {
        currentPage === "Docs" && <Docs/>
      }
    
    </div>
  );
}

export default App;
