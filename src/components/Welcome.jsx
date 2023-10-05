import hund from "./../assets/hund.jpeg"
import { Link } from "react-router-dom";

const Welcome = (props) => {

    return (
        <div className="flex-container">
            <div className="flex-child">
                <img id="hund" src={hund} alt="" />
            </div>
            <div className="flex-child">
                <h2 id="welcom">Hej och Välkommen till Dagis För hundar, tryck på katalog för att 
                    se våra registrerade hundar. 
                    <br />
                    <Link to='/catalog'>
                        <button id="buttoncatalog">Katalog</button>
                    </Link>
                </h2> 
            </div>
        </div>
    )



}

export default Welcome;

