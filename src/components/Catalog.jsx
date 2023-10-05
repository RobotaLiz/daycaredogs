import { Link } from 'react-router-dom'
import dogloggo from './../assets/dog.png'
import greenmark from './../assets/greendot.png'
import redmark from './../assets/reddot.png'

const Catalog = (props) => {

    function redOrGreen(dog) {
        if (dog.present){
            return greenmark
        }else{
            return redmark;
        }
        
    
    }
    
    return (
        <div className="container">
            <Link to='/'>
                <button className='back' onClick={props.toWelcome}>Tillbaka</button>
            </Link>
            
            <h1 id='catalogloggo'>HundKatalog</h1>
            <img id='dogloggo' src={dogloggo} alt="" />
            <ul>
                {props.alldogs.map((dog) => (
                    <li className="flex-container-dog" key={dog.chipNumber}>
                        <img className='checkboxdog' src={redOrGreen(dog)} alt="checkbox" />
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