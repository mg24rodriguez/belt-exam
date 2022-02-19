import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default function PersonList (props) {

    const { removeFromDom } = props;
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
    }
    
    return(
        
        <div className="container">
            <table className="table">
                <tbody>               
                    {props.people.map((person, idx) => {
                        return <tr key={idx}>
                            <td><Link to={"/people/" + person._id}> <h5> {person.firstName} </h5> </Link></td>
                                <td>{person.lastName}</td>
                                <td>{person.price}</td>
                                <td>
                                    <Link to={"/people/" + person._id} type="button" className="btn btn-info">
                                        🐾 &nbsp; Detail
                                    </Link>
                                </td>
                                <td>
                                    <Link to={"/people/" + person._id + "/edit"} type="button" className="btn btn-light">
                                        ✏️ &nbsp; Edit
                                    </Link>
                                </td>
                                <td>
                                <button onClick={(e)=>{deletePerson(person._id)}} type="button" className="btn btn-danger">
                                    🏠 &nbsp; Adopted
                                </button>  
                            </td>    
                        </tr>        
                    })}
            </tbody>
            </table>
        </div>
    )
}