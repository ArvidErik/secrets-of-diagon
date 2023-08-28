import './App.css'
import Navbar from './components/Navbar'
import FilterList from './components/FilterList'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import data from "./../products.json"




function App() {

  return (
    <div className='app'>
     <Navbar/>
     <Hero />
     <FilterList/>
     <ProductList data={data}/>
     <Footer/>

    </div>
  )
}

export default App
