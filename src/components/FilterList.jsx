import NameCard from "./NameCard";
import "../styles/FilterList.css"

function FilterList() {
    const Movie = ["Harry Potter", "Hermione", "Dumbledore", "Ron Weasley", "Voldemort", "See All"];


    return (
        <>
            <h1>NAMES</h1>
            <div className="card-container">
                {Movie.map((name, index) => (
                    <NameCard name={name} key={index} />
                ))}

            </div>
        </>
    );
}



export default FilterList

