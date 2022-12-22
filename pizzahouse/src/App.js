import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Aboutus from './Components/Aboutus/Aboutus';
<<<<<<< HEAD
import MenuPage from './Components/MenuPage/MenuPage';

function App() {
  return (
    <div className="App">
  {/* <HomePage/> */}
  {/* <Aboutus /> */}
  <MenuPage/>
    </div>
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/Aboutus' element={<Aboutus />} />
        </Routes>
      </div>
    </BrowserRouter>

>>>>>>> 734dc3b6a808a49352c8ecd9b14fce10cf0e4805
  );
}
export default App;
