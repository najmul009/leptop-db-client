import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemRow.css'

const ItemRow = ({item}) => {
    const {img,name,quantity,supplier,_id} = item
    const navigate = useNavigate()
    const handleDetails = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <tr>
                            <th scope="row">1</th>
                            <td><img width={100} src={img} alt="" /></td>
                            <td>{name}</td>
                            <td>{quantity}</td>
                            <td>{supplier}</td>
                            <td>
                                <button className='uNone ship-btn rounded' >
                                    <span className='text-shadow'>Ship</span>
                                </button>
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