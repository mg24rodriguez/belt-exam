import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';

export default function Details (props) {

    const [person, setPerson] = useState({})

    const [disableButton, setDisableButton] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson({
                ...res.data
            }))    
    }, [props.id])
   
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                navigate('http://localhost:3000/');
            } ) 
    }

    const handlerLikes = () => {
        const _person={...person, likes:person.likes + 1 } 
        axios.put('http://localhost:8000/api/people/' + props.id, _person)
            .then(res => {
                setPerson({...res.data});
                setDisableButton(true);
            })
    }

    return (
        <div className="container">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className= "navbar-brand"> <h2> 🦮 Refugio de mascotas </h2> </a>
                    <form className="d-flex">
                    <Link to={"/"} className="btn btn-link" type="submit">Back to home</Link>
                    </form>
                </div>
            </nav>
            <hr/>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <a className= "navbar-brand"> <h4>Te presentamos a: {person.firstName}</h4> </a>
                    <form className="d-flex">                    
                        <button onClick={(e)=>{deletePerson(person._id)}} type="button" className="btn btn-danger">
                            🏠 &nbsp; Adopt {person.firstName}
                        </button>
                    </form>
                </div>
            </nav>
            <hr/>
            <h5 className="card-title"> Tipo de mascota: {person.lastName} </h5>
            <h5 className="card-title"> Descripción: {person.price} </h5>

            <h6 className="text-secondary"> {person.skillOne} </h6>
            <h6 className="text-secondary"> {person.skillTwo} </h6>
            <h6 className="text-secondary"> {person.skillThree} </h6>

            <br/>

            <button onClick = {handlerLikes} type="button" className="btn btn-success" disabled={disableButton}>
                 👍🏻 &nbsp; Like {person.firstName} {person.likes}
            </button>

        </div>
    )
}