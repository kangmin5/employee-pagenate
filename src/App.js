import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';
import EmpListing from './EmpListing';

function App() {
    return (
        <div className="App">
            <h1>CRUD TEST</h1>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<EmpListing />} ></Route>
                    <Route path='/employee/create' element={<EmpCreate />} ></Route>
                    <Route path='/employee/detail/:empId' element={<EmpDetail />} ></Route>
                    <Route path='/employee/edit/:empId' element={<EmpEdit />} ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
