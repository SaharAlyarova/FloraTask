import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddPage from '../pages/addpage'
import DetailPage from '../pages/detail'
import HomePage from '../pages/home'
import NotFoundPage from '../pages/notfoundpage'

const RouterCom = () => {
  return (
    <div>
        <Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/addpage' element={<AddPage/>}/>
<Route path='/detail/:_id' element={<DetailPage/>}/>
<Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </div>
  )
}

export default RouterCom