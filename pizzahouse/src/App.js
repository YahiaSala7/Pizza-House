import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Aboutus from './Components/Aboutus/Aboutus';
import MenuPage from './Components/MenuPage/MenuPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/Aboutus' element={<Aboutus />} />
          <Route path='/Menu' element={<MenuPage/>}/>
          {/* <Route path='/Contacts' element={<ContactsPage/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>

  );
}
export default App;
