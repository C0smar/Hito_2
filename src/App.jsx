
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/navBar/NavComponent'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import RegisterPages from './components/register/RegisterPages';
import LoginPages from './components/loginPages/LoginPages'


function App() {
  return (
    <>
      <NavComponent/>
      <Home/>
      {/* <RegisterPages/> */}
      {/* <LoginPages/> */}
      <Footer/>
    </>
  )
}

export default App
