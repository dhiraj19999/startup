
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import WebDevelopment from './pages/subpages/Web'
function App() {


  return (
    <>
    <div>
      <Navbar/>
     
      <Home/>
      <About/>
    </div>
    </>
  )
}

export default App
