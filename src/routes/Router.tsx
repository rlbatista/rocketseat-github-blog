import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../pages/layout/DefaultLayout'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'


export function Router()  {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />}/>
                <Route path='/detail' element={<Detail />}/>
            </Route>
        </Routes>
    )
}