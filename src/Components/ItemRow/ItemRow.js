import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemRow.css'

const ItemRow = ({item,index}) => {
    const {img,name,quantity,supplier,_id} = item
    const [newQuantity, setNewQuantity] = useState(quantity);


    const navigate = useNavigate()
    const handleDetails = (id) => {
        navigate(`/inventory/${id}`)
    }
    const handleDeliver = id => {
        const quantityUpdate = newQuantity
        const updateQuantity = { quantityUpdate }
        fetch(`http://localhost:5000/inventory/deliver/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                setNewQuantity(newQuantity - 1)

            })
    }
    
    return (
        <tr>
                            <th scope="row">{index+1}</th>
                            <td><img width={100} src={img} alt="" /></td>
                            <td><strong>{name}</strong></td>
                            <td><strong>{newQuantity}</strong></td>
                            <td>{supplier}</td>
                            <td>
                                {
                                    quantity > 0 && <button onClick={() => handleDeliver(_id)} className='uNone ship-btn rounded' >
                                    <span className='text-shadow'>Ship</span>
                                </button>
                                }
                                <div className="mt-3">
                                <button onClick={() => handleDetails(_id)} className='uNone login-btn rounded' >
                                    <span className='text-shadow'>Update</span>
                                </button>
                                </div>
                            </td>
                            <td className="delete-icon">
                            <ion-icon name="trash" ></ion-icon>
                            </td>
                        </tr>
    );
};

export default ItemRow;