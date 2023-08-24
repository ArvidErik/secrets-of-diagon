import './App.css'
import Navbar from './components/Navbar'
import FilterList from './components/FilterList'
import Hero from './components/Hero'
import Footer from './components/Footer'




function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Hero />
     <FilterList/>
     <Footer/>

    </div>
  )
}

export default App
