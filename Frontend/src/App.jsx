import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Experience from './pages/Experience'

function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
  )
}

export default App;