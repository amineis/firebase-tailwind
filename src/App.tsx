import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Post from './pages/Post'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/post' element={<Post />}/>
        <Route path='*' element={<h1>ERROR PAGE</h1>}/>
      </Routes>
    </Router>
    
    
  )
}

export default App
