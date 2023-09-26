import { useState, useEffect } from 'react'


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
        <div>
            <button onClick={props.toWelcome}>back</button>
            <h1>Hundar </h1>
            <ul>
                {AllDogs.map((dog) => (
                    <li>
                <button key={dog.chipNumber} onClick={() => {props.choosenDog(dog)}}>{dog.name}</button>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default Catalog;