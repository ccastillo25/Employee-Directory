import React from 'react'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import MainContainer from './components/MainContainer'
import './components/style.css'

function App() {
  

  return (
    <div className="App">
      <SearchBar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;