import './App.css';
import React from 'react';
import './style.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/header';
import MainPage from "./components/mainPage"
import Footer from './components/footer';

function App() {
  return(
    <BrowserRouter>
        <div>
          <Navbar />
            <div>
              <Routes>
                <Route exact path="/" element={<MainPage/>} />
              </Routes>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
)
}

export default App;




