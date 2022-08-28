import { React } from 'react';
import './App.css';

import Gmap from './components/Gmap';
import Sidebar from './components/Sidebar/Sidebar'


function App() {
  return(
    <div className='App'>
      <Gmap/>
      <Sidebar/>
    </div>
  )
}

export default App;
