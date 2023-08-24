import { useState, } from "react";

function FilterList() {
    const Movie = ["Harry Potter", "Hermione", "Dumbledore", "Ron Weasley", "Voldemort", "See All"];
    const [names, setNames] = useState([]);

    return (
        <>
            <h1>NAMES</h1>

            {names.map((name, index) => (
                <NameCard NameObject={name} key={index} />
            ))}
        </>
    );
}



export default FilterList

