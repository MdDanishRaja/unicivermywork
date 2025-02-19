import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer';
import Navbar from './components/navbar';
function App() {
return (
 <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" exact element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
 </>
 );
}
export default App;




