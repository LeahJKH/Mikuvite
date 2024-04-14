import './App.css'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import FunFactMiku from './components/mikuComponents/funfactMiku/FunFactMiku'
import {MikuLove} from "@johnb08/test-library"


function App() {

  
  return (
    <>
      <Header></Header>
      <FunFactMiku></FunFactMiku>
      
        <MikuLove></MikuLove>
      <Footer></Footer>
    </>
  )
}

export default App
