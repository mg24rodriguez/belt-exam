import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import PersonForm from '../components/PersonForm';
import DeleteButton from '../components/DeleteButton';

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
    
    const updatePerson = person => {
        axios.put('http://localhost:8000/api/people/' + id, person)
            .then(res => console.log(res));
            navigate('/');

    }
    return (
        <div className="container">
            <h1>Editar producto</h1>
            {loaded && (
                <>
                    <PersonForm
                        onSubmitProp={updatePerson}
                        initialFirstName={person.firstName}
                        initialLastName={person.lastName}
                        initialPrice={person.price}
                    />
                    <br/>
                <DeleteButton personId={person._id} successCallback={() => navigate("/")}/>
                </>
            )}
        </div>
    )
}
