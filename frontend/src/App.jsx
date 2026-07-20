import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
// A component is anything which returns .jsx code looks like HTML
// starts with capital letter
// jsx has parent element only one, anything inside of there
// a fragment is an empty html tag <> </>
// if you want 2 divs without a div parent
// What components do I need
// Movie app
// -> name, poster, release date, favourite
// second set of braces in movie = {{}} outer for parameter, inner defines the object
// conditional rendering, render one thing if A, other thing if B

function App() {
  const movieNumber = 2;
  
  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </main>
    </div>
  );
}

// my text component
// prop in curly bases (property)
function Text({display}){
  return (<div>
    <p>{display}</p>
  </div>);
}

export default App
