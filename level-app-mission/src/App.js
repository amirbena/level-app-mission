import React from 'react';
import Navbar from './components/navbar';
import Popup from './components/popupInput/popup';
import Table from './components/table/table';
import SurePopupDelete from './components/surePopupDelete'
import './App.css';



function App() {

  return (
    <div className="App">
      <Navbar />
      <Popup />
      <Table />
      <SurePopupDelete />
    </div>
  );
}
export default App;
