import React from 'react';
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {
  return (
    <React.Fragment className="App">
      <Header />
      <div className="container-fluid">
        <MainContent />
      </div>
    </React.Fragment >
  );
}

export default App;
