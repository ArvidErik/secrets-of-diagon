import "../styles/Filter.css"

export default function FilterCard(params) {
    return (
        <div className="filter-card" onClick={(e)=>params.filter(e)}>{params.name}</div>
    )
}