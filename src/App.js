import { React } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';


import Dashboard from '../src/page/Dashboard';
import Experiment from '../src/page/Experiment';
import Lab from '../src/page/Lab';
import Account from '../src/page/Account';
import Setting from '../src/page/Setting';
import Error from '../src/page/Error';
import { Routes, Route } from "react-router-dom";

function App() {
  return(
    <div className='App'>
      <Sidebar/>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/experiment" element={<Experiment />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/account" element={<Account />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
