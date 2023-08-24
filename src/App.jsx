import './App.css'
import Navbar from './components/Navbar'
import FilterList from './components/FilterList'
import Hero from './components/Hero'




function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Hero />
     <FilterList/>

    </div>
  )
}

export default App
