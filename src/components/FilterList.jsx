import { useState, } from "react";
import FilterCard from "./FilterCard"
import "./../styles/Filter.css"


function FilterList() {
    const Movies = ["See All", "Harry Potter", "Hermione", "Dumbledore", "Ron Weasley", "Voldemort"];

    return (
        <div className="filter-list">
            <h1>Our favorites</h1>
            <div className="filter-buttons">
            {Movies.map((movie, index) => (
                <FilterCard name={movie} key={index} />
            ))}
            </div>
        </div>
    );
}



export default FilterList

