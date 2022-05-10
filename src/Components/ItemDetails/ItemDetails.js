import React, { useEffect, useState } from 'react';
import { div } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CustomLink from '../CoustomLink/CoustomLink';
import './ItemDetails.css'

const ItemDetails = () => {
    const { inventoryId } = useParams();
    const [Item, setItem] = useState({});
    const [isReload, setReload] = useState(true)

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [isReload])

    const handleFruitsUpdate = async (e) => {
        e.preventDefault()
        const quantity = parseInt(e.target.quantity.value) + parseInt(Item.quantity)
        const updateFruits = { quantity }

        const url = `http://localhost:5000/inventory/${inventoryId}`;
        await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFruits)
        })
            .then(res => res.json())
            .then(result => {
                console.log("success", result);
                alert('Quantity Update Successful');
                e.target.reset();
                setReload(!isReload)
            })
    }
    return (
        <div>
            <div className="container ">
                <div className="update w-100">
                    <div className='item-details'>
                        <div>
                            <img src={Item.img} alt="" />
                        </div>
                        <div>
                            <h1 className=' text-success'>*{Item.name}*</h1>
                            <h6><span className='fw-bold'>Price:</span> ${Item.price}</h6>
                            <p><strong>Description:</strong>{Item.description}</p>
                            <div className='line'>
                                <p><span className='fw-bold'>In-Stock:</span><span className='text-danger fw-bold'> {Item?.quantity} Pis</span></p>

                            </div>
                        </div>

                        <div className='col-lg-4 update mt-3'>
                            <h3 className='text-success'>Update Stock</h3>
                            <form onSubmit={handleFruitsUpdate} className='d-flex flex-column'>
                                <label className='fw-bold' htmlFor="quantity">Stock*</label>
                                <input type="number" name="quantity" id="" required /> <br />
                                <input className='border-0 btn-dark py-2    ' type="submit" value="Update" />
                            </form>
                        </div>

                    </div>
                </div>



            </div >
            <div className='mb-5 d-flex justify-content-center align-Item-center'>
                <CustomLink to='/inventory'><button className='login-btn'>Inventory Page</button></CustomLink>
            </div>
        </div >
    );
};

export default ItemDetails;