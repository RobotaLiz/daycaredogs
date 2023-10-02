import { Link } from 'react-router-dom'
import dogloggo from './../assets/dog.png'


const Catalog = (props) => {
    
    return (
        <div className="container">
            <Link to='/'>
                <button onClick={props.toWelcome}>Tillbaka</button>
            </Link>
            
            <h1 id='catalogloggo'>HundKatalog</h1>
            <img id='dogloggo' src={dogloggo} alt="" />
            <ul>
                {props.alldogs.map((dog) => (
                    <li className="flex-container-dog" key={dog.chipNumber}>
                        <Link to={"/dogdetails/"+dog.chipNumber}>
                            <button className="dog-button" >{dog.name}</button>
                        </Link>
                        
                        <div className="flex-child-dog">{dog.owner.name} {dog.owner.lastName}</div>
                        <div className="flex-child-dog">Tele: {dog.owner.phoneNumber}</div>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default Catalog;