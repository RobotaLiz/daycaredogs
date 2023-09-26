import { useState, useEffect } from 'react'
import dogloggo from './../assets/dog.png'
import hundkatalog from './../assets/hundkatalog.png'


const Catalog = (props) => {

    const [AllDogs, setDogs] = useState([]);
    const Api = "https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683";
    
   
    async function grabJson() {

        let grabApi = await fetch(Api);
        let json = await grabApi.json()
        setDogs(json.record);

    } 
     useEffect(()=>{
        grabJson();

    },[]);
    
    return (
        <div class="container">
            <button onClick={props.toWelcome}>back</button>
            <h1 id='catalogloggo'>HundKatalog</h1>
            <img id='dogloggo' src={dogloggo} alt="" />
            <ul>
                {AllDogs.map((dog) => (
                    <li class="flex-container-dog">
                        <button class="dog-button" key={dog.chipNumber} onClick={() => {props.choosenDog(dog)}}>{dog.name}</button>
                        <div class="flex-child-dog">{dog.owner.name} {dog.owner.lastName}</div>
                        <div class="flex-child-dog">Tele: {dog.owner.phoneNumber}</div>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default Catalog;