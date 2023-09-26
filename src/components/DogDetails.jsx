
const DogDetails = (props) => {

    function boolColor() {
        if (props.dog.present) {
            return {color: 'green'};
        }else {
            return {color: 'red'};
        }
    }
   
   
    return (
       <div>
        <h2>name {props.dog.name}</h2>
        <h3>age {props.dog.age}</h3>
        <h3>sex {props.dog.sex}</h3>
        <p>present:<p style={boolColor()}>{props.dog.present.toString()}</p></p>
        <img src={props.dog.img} alt="dog" /><br />
        <button onClick={props.getBack}>Back</button>
       </div>
    )
}

export default DogDetails;