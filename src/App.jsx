import { useState, useEffect } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Catalog from './components/Catalog'
import DogDetails from './components/DogDetails'
import { Routes, Route } from 'react-router-dom'



function App() {

    const [AllDogs, setDogs] = useState([]);
    const Api = "https://api.jsonbin.io/v3/b/651e6b630574da7622b49f0c";
    
   
    async function grabJson() {

        let grabApi = await fetch(Api);
        let json = await grabApi.json()
        setDogs(json.record);

    } 
     useEffect(()=>{
        grabJson();

    },[]);

    function getDog(chipNumber){
        return AllDogs.find(dog => dog.chipNumber == chipNumber);
    }

    return (

    <div>
        <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/catalog' element={<Catalog alldogs={AllDogs}/>}/>
            <Route path='/dogdetails/:chipnumber' element={<DogDetails getDog={getDog}/>}/>
        </Routes>
    </div>


    )
    


}


export default App
