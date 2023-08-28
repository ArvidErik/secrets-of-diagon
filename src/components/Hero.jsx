import sample from "../assets/video.mp4"
import "../styles/Navbar.css"

function Hero () {
    return (
        <>
        <div className="video-player">
            <video loop autoPlay muted className="hero-video">
                <source src={sample} type="video/mp4" />
            </video>
        </div>
        <div className="hero">
                <h1 className="hero-text">Bombarda <br/>Maxima</h1>
                <button className="hero-button">Discover our products</button>
        </div>
        </>
    )
}

export default Hero;