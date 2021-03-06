import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import { Link } from '@reach/router';

export default function Main () {

    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getAllUsers ();
    }, [])

    const getAllUsers = () => {
        axios.get('http://localhost:8000/api/people')
            .then(res =>{ 
                console.log (res.data)
                setPeople(res.data)
                setLoaded(true);
            });
    }

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id !== personId));
    }

    return (

        <div className="container">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className= "navbar-brand"> <h2> 🦮 Refugio de mascotas</h2> </a>
                    <form className="d-flex">
                    <Link to={"people/:id/register"} className="btn btn-success" type="submit"> 🦮 &nbsp; Registra una nueva mascota </Link>
                    </form>
                </div>
            </nav>
            &nbsp;
            <h5>Estas mascotas necesitan un hogar</h5>
            <hr/>
            {<PersonList people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
}