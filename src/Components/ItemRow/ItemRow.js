import React from 'react';
import CustomLink from '../CoustomLink/CoustomLink';
import './ItemRow.css'

const ItemRow = ({item}) => {
    const {img,name,quantity,supplier} = item
    return (
        <tr>
                            <th scope="row">1</th>
                            <td><img width={100} src={img} alt="" /></td>
                            <td>{name}</td>
                            <td>{quantity}</td>
                            <td>{supplier}</td>
                            <td>
                                <CustomLink className='uNone ship-btn rounded' to='/login'>
                                    <span className='text-shadow'>Ship</span>
                                </CustomLink>
                                <div className="mt-3">
                                <CustomLink className='uNone login-btn rounded' to='/login'>
                                    <span className='text-shadow'>Update</span>
                                </CustomLink>
                                </div>
                            </td>
                            <td className="delete-icon">
                            <ion-icon name="trash" ></ion-icon>
                            </td>
                        </tr>
    );
};

export default ItemRow;