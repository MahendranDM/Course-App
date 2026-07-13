import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import InsertCourse from './components/InsertCourse'
import ViewCourses from './components/ViewCourse'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     


<BrowserRouter>


<Routes>

 <Route path="/" element={<ViewCourses />} />
        <Route path="/add" element={<InsertCourse />} />



</Routes>

</BrowserRouter>
    </>
  )
}

export default App
