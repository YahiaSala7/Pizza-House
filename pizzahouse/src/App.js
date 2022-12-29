import './App.css';
import React ,{ useState ,useEffect} from 'react';
import HomePage from './Components/HomePage/HomePage';
import Aboutus from './Components/Aboutus/Aboutus';
import MenuPage from './Components/MenuPage/MenuPage';
import Cart from './Components/AddtoCart/Cart';
import Login from './Components/RegisterAndLogIn/Login';
import Register from './Components/RegisterAndLogIn/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacts from './Components/Contacts/Contatct'


function App() {
  const [ user, setLoginUser] = useState({})
  useEffect(()=>{

  })
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path='/' element={<HomePage setLoginUser={setLoginUser}/>} />
            <Route path='/Aboutus' element={<Aboutus/>} />
            <Route path='/Menu' element={
              //user && user._id? <MenuPage setLoginUser={setLoginUser}/>  : <Login setLoginUser={setLoginUser} /> 
              <MenuPage/>
            }/>
            <Route path='/Contacts' element={<Contacts />} />
            <Route path='/Login' element={  user && user._id? <MenuPage setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser} />} />
            <Route path='/Register' element={ user && user._id? <MenuPage setLoginUser={setLoginUser}/>:<Register />} />
            <Route path='/AddtoCart' element={ user && user._id? <Cart />:<Login setLoginUser={setLoginUser} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

