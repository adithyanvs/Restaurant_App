import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RestaurantsDetails from './components/RestaurantsDetails';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<RestaurantsDetails/>}/>
      </Routes>
      
      <Footer/>
    </Router>
  )
}

export default App