import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Home from './Pages/Home';
import './Pages/style.css'
import Recipe from './Pages/Recipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edit from './Pages/Edit';
import Detail from './Pages/Detail';

function App() {

  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Recipe/>} path='/new'/>
            <Route element={<Edit/>} path='/edit'/>
            <Route element={<Detail/>} path='/detail/:id'/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
