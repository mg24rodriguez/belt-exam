import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';

export default function Main () {

    useEffect(() => {
        getAllUsers ();
    }, [])

    
    const getAllUsers = () => {
        axios.get('http://localhost:8000/api/people')
            .then(res =>{ 
                console.log (res.data)
            });
    }

    const createPerson = person => {
        axios.post('http://localhost:8000/api/people', person)
            .then(res => {
                getAllUsers ();
                navigate("/")   
            })    
    }

    return (
        <div className="container">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className= "navbar-brand"> <h2>Refugio de mascotas</h2> </a>
                    <form className="d-flex">
                    <Link to={"/"} className="btn btn-link" type="submit">Back to home</Link>
                    </form>
                </div>
            </nav>
            &nbsp;
            <h5>Registra una mascota que necesite</h5>
            <hr/>
            <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName=""/>
        </div>
    )
}