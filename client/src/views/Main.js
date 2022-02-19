import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

export default function Main () {

    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getAllUsers ();
    }, [people])

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

    const createPerson = person => {
        axios.post('http://localhost:8000/api/people', person)
            .then(res=>{
                getAllUsers ();    
            })    
    }
    return (
        <div className="container">
           <h2>Administrador de productos</h2> 
           <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName=""/>
           <hr/>
           {<PersonList people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
}