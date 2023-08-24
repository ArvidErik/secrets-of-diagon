import sample from "../assets/video.mp4"
import "../styles/Navbar.css"

function Hero () {
    return (
        <div className="hero">
            <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>

            <div className="hero-text">
                <h1 className="hero-text">BOMBARDA <br/>MAXIMA</h1>
                <button className="hero-button">Discover our products</button>
            </div>
        </div>
    )
}

export default Hero;