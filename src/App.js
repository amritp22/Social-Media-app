import logo from './logo.svg';
import './App.css';
import Authentication from './pages/authentication/Authentication';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/authentication/Register';
import Login from './pages/authentication/Login';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from './Redux/auth.action';
import { useEffect } from 'react';
import Message from './pages/Message/Message';

function App() {
  const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    //accessing user
    const {auth}=useSelector(store=>store);
    useEffect(()=>{
        dispatch(getProfileAction(jwt))
    },[jwt])
  return (
    <div className="App">
      {/* <Authentication /> */}
      <Routes>
        <Route path='/*' element={auth.user?<HomePage />:<Authentication />}/>
        <Route path="/*" element={<Authentication />} />
        <Route path='/message' element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
