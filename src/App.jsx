import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayouts'
import Home from '../Page/Home'
import Travel from "../Page/Travel"
import AboutUs from '../Page/AboutUs'
import SingleTravel from '../Page/SingleTravel'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/travel/:id" element={<SingleTravel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}