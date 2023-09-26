import Catalog from "./Catalog";

const Welcome = (props) => {

    return (
        <div>
            <section>Välkommen till Dagis för hundar</section>
            <h6>nedan har du en knapp som leder dej till hundkatalogen</h6>
            <button onClick={props.toCatalog}>Katalog</button>
           
            
        </div>
    )



}

export default Welcome;

