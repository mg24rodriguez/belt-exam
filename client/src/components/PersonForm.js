import React, { useEffect, useState } from 'react'

export default function PersonForm (props) {

    const { initialFirstName, initialLastName, initialPrice, onSubmitProp } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [price, setPrice] = useState(initialPrice);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({firstName, lastName, price});
    }
    
        
    return (
        <form onSubmit={onSubmitHandler} className="container">
            <p>
                <label>Nombre del producto</label><br />
                <input 
                    type="text" 
                    name="firstName"
                    value={firstName} 
                    onChange={(e) => { setFirstName(e.target.value) }} />
            </p>
            <p>
                <label>Detalle del producto</label><br />
                <input 
                    type="text" 
                    name="lastName" 
                    value={lastName} 
                    onChange={(e) => { setLastName(e.target.value) }} />
            </p>
            <p>
                <label>Precio</label><br />
                <input 
                    type="text" 
                    name="Price" 
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
            </p>
            <input type="submit" className="btn btn-primary" />

        </form>
    )
}