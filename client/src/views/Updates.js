import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';
import PersonForm from '../components/PersonForm';

export default function Updates (props) {
    const { id } = props;
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, [])

    const getAllUsers = () => {
        axios.get('http://localhost:8000/api/people')
            .then(res =>{ 
                console.log (res.data)
                setLoaded(true);
            });
    }
    
    const updatePerson = person => {
        axios.put('http://localhost:8000/api/people/' + id, person)
            .then(res => console.log(res));
            getAllUsers ();
            navigate('/');

    }
    
    return (
        <div className="container">
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className= "navbar-brand"> <h2>Pet shelter</h2> </a>
                <form className="d-flex">
                <Link to={"/"} className="btn btn-link" type="submit">Back to home</Link>
                </form>
            </div>
        </nav>
        &nbsp;
            {loaded && (
                <PersonForm
                    onSubmitProp={updatePerson}
                    initialFirstName={person.firstName}
                    initialLastName={person.lastName}
                    initialPrice={person.price}
                    initialSkillOne={person.skillOne}
                    initialSkillTwo={person.skillTwo}
                    initialSkillThree={person.skillThree}
                />
            )}
        </div>
    )
}
