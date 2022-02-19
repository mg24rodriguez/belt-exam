import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

export default function Details (props) {

    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson({
                ...res.data
            }))    
    }, [props.id])

    return (
        <div className="container">
            <p className="card-text">Información del producto</p>
            <h2 className="card-title"> {person.firstName} </h2>
            <h6 className="card-title"> {person.lastName} </h6>
            <h6 className="card-subtitle mb-2 text-muted"> {person.price} </h6>
            <br/>
            <Link to={"/people/" + person._id + "/edit"} type="button" className="btn btn-primary">
                Editar producto
            </Link> 
        </div>
    )
}