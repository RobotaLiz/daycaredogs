import Catalog from "./Catalog";
import hund from "./../assets/hund.jpeg"

const Welcome = (props) => {

    return (
        <div class="flex-container">
            <div class="flex-child">
                <img id="hund" src={hund} alt="" />
            </div>
            <div class="flex-child">
                <h2 id="welcom">Hej och Välkommen till Dagis För hundar, tryck på katalog för att 
                    se våra registrerade hundar. 
                    <br /><button id="buttoncatalog" onClick={props.toCatalog}>Katalog</button>
                </h2>
                
                
            </div>
            
           
            
        </div>
    )



}

export default Welcome;

