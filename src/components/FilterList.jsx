import { useState, } from "react";
import FilterCard from "./FilterCard"
import "./../styles/Filter.css"
import ProductList from "./ProductList";


function FilterList(params) {
    const Movies = ["See All", "Harry Potter", "Hermione", "Dumbledore", "Ron Weasley", "Voldemort"];
    const [filterCond, setFilterCond] = useState("")


    function filter(e) {
        setFilterCond(e.target.innerHTML)
    }


    return (
        <div className="filter-list">
            <h1>Our favorites</h1>
            <div className="filter-buttons">
            {Movies.map((movie, index) => (
                <FilterCard name={movie} key={index} filter={filter}/>
            ))}
            </div>

            <ProductList data={params.data} filter={filterCond}/>

        </div>
    );
}



export default FilterList

