import leia from './../assets/leia.jpeg'
import { Link, useParams } from "react-router-dom";

const DogDetails = (props) => {
    let params = useParams();

   let dog = props.getDog(params.chipnumber);

    function boolColor() {
        if (dog.present) {
            return {color: 'green'};
        }else {
            return {color: 'red'};
        }
    }
    function boolSmiley() {
        if (dog.present) {
            return <>&#128512;</>
        }else {
            return <>&#128542;</>;
        }
    }
   
    return (
        <div>
            <Link to='/catalog'>
                <button className='back'>Tillbaka</button>
            </Link>
            
            <div className="flex-container">
        
        <div className="flex-child">
            <img id="hund" src={dog.img} alt= "not found" onError={({currentTarget})=> currentTarget.src = leia} />
        </div>
        <div id="dogsquare" className="flex-child">
            
            <h1>{dog.name}</h1>
            <h4>· Ålder : {dog.age}</h4><br />
            <h4>· Kön : {dog.sex}</h4><br />
            <h4>· ID : {dog.chipNumber}</h4><br />
            <h4>· Hundras : {dog.breed}</h4><br />
            <div>
                <h4 className="inline">· Närvarande: </h4>
                <h4 className="inline" style={boolColor()}>{dog.present.toString()}</h4>
                <h4 className="inline"> {boolSmiley()}</h4>
            </div><br/>
            <h3>· Ägare : {dog.owner.name} {dog.owner.lastName}</h3><br/>
            <h4>· Tele : {dog.owner.phoneNumber}</h4>
        </div>
       </div>
        </div>
       
    )
}

export default DogDetails;