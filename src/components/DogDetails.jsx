
const DogDetails = (props) => {

    function boolColor() {
        if (props.dog.present) {
            return {color: 'green'};
        }else {
            return {color: 'red'};
        }
    }
    function boolSmiley() {
        if (props.dog.present) {
            return <>&#128512;</>
        }else {
            return <>&#128542;</>;
        }
    }
   
    return (
        <div>
            <button onClick={props.getBack}>Back</button>
            <div class="flex-container">
        
        <div class="flex-child">
            <img id="hund" src={props.dog.img} alt="dog" />
        </div>
        <div class="flex-child">
            
            <h1>{props.dog.name}</h1>
            <h4>· Age : {props.dog.age}</h4><br />
            <h4>· Gender : {props.dog.sex}</h4><br />
            <h4>· ID : {props.dog.chipNumber}</h4><br />
            <h4>· Breed : {props.dog.breed}</h4><br />
            <div>
                <h4 class="inline">· Present:</h4>
                <h4 class="inline" style={boolColor()}>{props.dog.present.toString()}</h4>
                <h4 class="inline"> {boolSmiley()}</h4>
            </div><br/>
            <h3>· Owner : {props.dog.owner.name} {props.dog.owner.lastName}</h3><br/>
            <h4>· Phone : {props.dog.owner.phoneNumber}</h4>
        </div>
       </div>
        </div>
       
    )
}

export default DogDetails;