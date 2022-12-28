import './App.css';
import React ,{ useState } from 'react';
import HomePage from './Components/HomePage/HomePage';
import Aboutus from './Components/Aboutus/Aboutus';
<<<<<<< HEAD
=======
import MenuPage from './Components/MenuPage/MenuPage';
import Cart from './Components/AddtoCart/Cart';
import Login from './Components/RegisterAndLogIn/Login';
import Register from './Components/RegisterAndLogIn/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacts from './Components/Contacts/Contatct'

>>>>>>> 3607a60524fcf898e87286deb3765730a53f9a48

function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
<<<<<<< HEAD
  {/* <HomePage/> */}
  <Aboutus />
  
=======
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/Aboutus' element={<Aboutus />} />
          <Route path='/Menu' element={<MenuPage/>}/>
          <Route path='/Contacts' element={<Contacts/>}/>
          <Route path='/Login' element={<Login   setLoginUser={setLoginUser}/>} />
          <Route path='/Register' element={<Register/>}/>
          <Route path='/AddtoCart' element={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
>>>>>>> 3607a60524fcf898e87286deb3765730a53f9a48
    </div>
  );
}
export default App;
