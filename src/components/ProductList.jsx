import dumbWand from "./../../images/dumbledore wand.png"
import harryBroom from "./../../images/harry broom.png"
import harryWand from "./../../images/harry wand.png"
import hermioneBroom from "./../../images/hermione broom.png"
import hermioneWand from "./../../images/hermione wand.png"
import invisibilityCape from "./../../images/invisibility cape.png"
import ronWand from "./../../images/ron wand.png"
import scarf from "./../../images/scarf.png"
import voldemortWand from "./../../images/voldemort wand.png"
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

    return (
        <div className="product-container">
            {params.data.map((product, key)=>{
                return (
                <div className="product-card" index={key}>
                    <img src={images[product.img]} alt="" />
                    <h4>{product.name}</h4>
                </div>         
                )
            })}
        </div>
    )
}