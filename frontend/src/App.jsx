import {Outlet } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Store/store';
import './App.css'
import Navbar from './components/Navbar'
// import Home from './components/Home'
function App() {

  return (
    <>
      <Provider store={ store }>
      <Navbar />
      <Outlet/>
      </Provider>
    </>
  )
}

export default App
