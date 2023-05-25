import Navbar from "./Navbar";
import img01 from "./Images/solutionxillustration01.png"


function Header () {
    return (
        <header className="header" id="header">
            <div className="header-upside">
                <Navbar/>
            </div>
            <div className="header-downside">
                <div className="header-downside-container">
                    <div className="header-text">
                        <h2 className="first-txt" >SolutionX</h2>
                        <h1 className="second-txt">Web Development</h1>
                        <h3 className="third-txt">Agentliyi</h3>
                        <div className="header-btn-box">
                            <button className="header-btn" ><a href="https://api.whatsapp.com/send?phone=+9940103282119&text=Hello,%20I%20am%20interested%20in%20your%20product." target="_blank" className="header-btn-link">HƏRƏKƏTƏ KEÇ</a></button>
                        </div>
                    </div>
                    <div className="header-mascot">
                        <img className="mascot-img" src={img01} alt="SolutonX Mascot" />
                    </div>
                </div>
              
            </div>
        </header>
    );    
}
export default Header;