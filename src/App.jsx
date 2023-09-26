import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import Catalog from './components/Catalog'
import DogDetails from './components/DogDetails'



function App() {

    const WELCOME = 'welcome', CATALOG = 'catalog';
    const [currentScreen, setCurrentScreen] = useState(WELCOME);
    
    const [OneDog,setDogs] = useState(null);

    let content = null;

    if(OneDog != null){
        
        content = <DogDetails dog={OneDog} getBack={()=> setDogs(null)}/>
    }
    else if (currentScreen === WELCOME) {
        content = <Welcome toCatalog={()=>setCurrentScreen(CATALOG)}/>; 
         
    }else{
        content = <Catalog choosenDog={(dog) => setDogs(dog)} toWelcome={()=>setCurrentScreen(WELCOME)}/>;
       
    } 

    return (

    <div>
        {content}
    </div>


    )
    


}


export default App
