import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';
import EmpListing from './EmpListing';
import Intro from './Intro';

const MyRouter = () => {
  return (
    <div>

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Intro />} ></Route>
                <Route path='/employee' element={<EmpListing />} ></Route>
                <Route path='/employee/create' element={<EmpCreate />} ></Route>
                <Route path='/employee/detail/:empId' element={<EmpDetail />} ></Route>
                <Route path='/employee/edit/:empId' element={<EmpEdit />} ></Route>
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default MyRouter