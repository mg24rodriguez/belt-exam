import React, { useState } from 'react'

export default function PersonForm (props) {

    const { initialFirstName, initialLastName, initialPrice="", initialSkillOne="", initialSkillTwo="", initialSkillThree="", onSubmitProp } = props;
    
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [price, setPrice] = useState(initialPrice);
    const [skillOne, setSkillOne] = useState(initialSkillOne);
    const [skillTwo, setSkillTwo] = useState(initialSkillTwo);
    const [skillThree, setSkillThree] = useState(initialSkillThree);

    const onSubmitHandler = e => {
        e.preventDefault();
        if((firstName===undefined || firstName=== '')){
            return alert("El nombre del perro es requerido")
        }
        if((lastName===undefined || lastName=== '')){
            return alert("El tipo de mascota es requerido")
        }
        if((price===undefined || price=== '')){
            return alert("Un detalle de mascota es requerido")
        }
        return onSubmitProp({firstName, lastName, price, skillOne, skillTwo, skillThree, likes:0});
    }
    
    return (
        <form onSubmit={onSubmitHandler} className="row g-3">
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Pet Name</label>
                <input
                    className="form-control"
                    type="text" 
                    name="firstName"
                    value={firstName} 
                    onChange={(e) => { setFirstName(e.target.value) }} />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Skill</label>
                <input
                    className="form-control"
                    type="text" 
                    name="skillOne"
                    value={skillOne} 
                    onChange={(e) => { setSkillOne(e.target.value) }} />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Pet Type</label>
                <input 
                    className="form-control"
                    type="text" 
                    name="lastName" 
                    value={lastName} 
                    onChange={(e) => { setLastName(e.target.value) }} />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Skill</label>
                <input
                    className="form-control"
                    type="text" 
                    name="skillTwo"
                    value={skillTwo} 
                    onChange={(e) => { setSkillTwo(e.target.value) }} />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Pet Description</label>
                <input 
                    className="form-control"
                    type="text" 
                    name="price" 
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Skill</label>
                <input
                    className="form-control"
                    type="text" 
                    name="skillThree"
                    value={skillThree} 
                    onChange={(e) => { setSkillThree(e.target.value) }} />
            </div>
            <button type="submit" className="btn btn-primary"> Guardar </button>
        </form>
    )
}