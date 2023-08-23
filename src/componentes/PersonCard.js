import React from "react";

class PersonCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    render() {
        const {lastName, firstName, age, hairColor} = this.props;

        return (
            <div className="row justify-content-center">
                <div className="col-3 card mb-3">
                    <h2>{lastName}, {firstName}</h2>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hairColor}</p>
                    <button className="btn btn-info" onClick={this.cumple}>Birthday button {firstName}</button>
                </div>
            </div>
        )
    }
    cumple = () => {
    let nuevaEdad = this.state.age +1;
    this.setState({age: nuevaEdad});
    }
}


export default PersonCard;