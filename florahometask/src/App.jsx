
import './App.css'
import Footer from './layouts/footer'
import Header from './layouts/header'
import RouterCom from './routes'
import "./style.scss"
import ScrollToTop from "react-scroll-to-top";
function App() {


  return (
    <div className="App">
  <Header/>
  <ScrollToTop smooth style={{backgroundColor:'#25705C'}}/>
  <RouterCom/>
  <Footer/>
    </div>
  )
}

export default App
