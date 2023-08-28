import { useState } from "react"
import dumbWand from "./../../images/dumbledore wand.png"
import harryBroom from "./../../images/harry broom.png"
import harryWand from "./../../images/harry wand.png"
import hermioneBroom from "./../../images/hermione broom.png"
import hermioneWand from "./../../images/hermione wand.png"
import invisibilityCape from "./../../images/invisibility cape.png"
import ronWand from "./../../images/ron wand.png"
import scarf from "./../../images/scarf.png"
import voldemortWand from "./../../images/voldemort wand.png"
import trash from "./../../images/trash.svg"
import "./../styles/Product.css"

const images = {
    "/harry wand.png" : harryWand,
    "/dumbledore wand.png" : dumbWand,
    "/ron wand.png" : ronWand,
    "/hermione wand.png" : hermioneWand,
    "/voldemort wand.png" : voldemortWand,
    "/scarf.png" : scarf,
    "/invisibility cape.png" : invisibilityCape,
    "/harry broom.png" : harryBroom,
    "/hermione broom.png" : hermioneBroom
}

export default function ProductList(params) {

    const [products, setProducts] = useState(params.data)

    function click (e) {
        console.log(e.target.value);

        const newArr = [... products].map((element)=>{
            if (element.name == e.target.value) {
                if (element.isClicked === false) {
                    element.isClicked = true
                } 
            }
            return element
        })

        console.log(newArr);

        setProducts(newArr)
        
    }

    function trashClick (e) {
        console.log(e.target.id);

        const newArr = [... products].map((element)=>{
            if (element.name == e.target.id) {
                    element.isClicked = false             
            }
            return element
        })

        setProducts(newArr)
        
    }

    return (
        <div className="product-container">
            {products.map((product, key)=>{
                return (
                <div className="product-card" index={key}>
                    <div className="product-content">
                    <img className="prod-img" src={images[product.img]} alt="" />
                    <div className="product-details">
                    <h4>{product.name}</h4>
                    <h5>{product.owner}</h5>
                    <h3>{product.price} €</h3>
                    <div className="button-cont">
                    <button className={`cta ${product.isClicked&&"clicked"}`} value={product.name} onClick={(e)=>click(e)}>{product.isClicked? "Added" : "Add to card"}</button>
                    {product.isClicked && <button onClick={(e)=>trashClick(e)} className="trash-but"><img className="trash" src={trash} id={product.name}></img></button>}
                    </div>
                    </div>
                    </div>
                </div>         
                )
            })}
        </div>
    )
}