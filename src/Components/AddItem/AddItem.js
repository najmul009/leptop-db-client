import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddItem.css'

const AddItem = () => {
    const [user] = useAuthState(auth)

    const imgRef = useRef('')
    const nameRef = useRef('')
    const priceRef = useRef('')
    const quantityRef = useRef('')
    const supplierRef = useRef('')
    const descriptionRef = useRef('')

    const handleAddFruits = (e) => {
        e.preventDefault();
        const img = imgRef.current.value
        const name = nameRef.current.value
        const price = priceRef.current.value
        const quantity = quantityRef.current.value
        const supplierName = supplierRef.current.value
        const description = descriptionRef.current.value
        const email = e.target.email.value

        const addFruits = { img, name, price, quantity, supplierName, description, email };

        fetch('http://localhost:5000/additem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addFruits)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Item added successfully!!!');
                e.target.reset();
            })
    }
    return (
        <div className=' additem-section '>
            <h3 className=' text-success margin-text text-center'>Please!! Add a New  Items</h3>
            <div className=' d-flex fruits justify-content-center '>
                <form onSubmit={handleAddFruits} className='fruits-container mt-3   shadow'>
                    <div className='d-flex justify-content-center flex-column line mt-4'>
                        <label className='fw-bold' htmlFor="email">UserEmail*</label><br />
                        <input className='fw-bold text-secondary border-0 p-2 rounded' type="email" value={user?.email} name="email" id="1" required readOnly />
                    </div>
                    <div className='d-flex justify-content-center flex-column line mt-4'>
                        <label className='fw-bold' htmlFor="img">Image URL*</label><br />
                        <input className='border-0 p-2 rounded' ref={imgRef} type="text" name="img" id="1" required />
                    </div>
                    <div className='d-flex justify-content-center flex-column line mt-4'>
                        <label className='fw-bold ' htmlFor="">Name*</label><br />
                        <input className='fw-bold text-secondary border-0 p-2 rounded' ref={nameRef} type="text" name="name" id="2" required />
                    </div>
                    <div className='d-flex justify-content-center flex-column line mt-4'>
                        <label className='fw-bold' htmlFor="">Price*</label><br />
                        <input className='fw-bold text-secondary border-0 p-2 rounded' ref={priceRef} type="number" name="number" id="2" required />
                    </div>
                    <div className='d-flex justify-content-center flex-column line mt-4'>
                        <label className='fw-bold' htmlFor="">Description*</label><br />
                        <input className='fw-bold text-secondary border-0 p-2 rounded' ref={descriptionRef} type="text" name="description" id="2" required />
                    </div>
                    <div className='d-flex justify-content-center flex-column line mt-4'>
                        <label className='fw-bold' htmlFor="">Quantity*</label><br />
                        <input className='fw-bold text-secondary border-0 p-2 rounded' ref={quantityRef} type="number" name="quantity" id="2" required />
                    </div>
                    <div className='d-flex justify-content-center flex-column line mt-4'>
                        <label className='fw-bold' htmlFor="">SupplierName*</label><br />
                        <input className='fw-bold text-secondary border-0 p-2 rounded' ref={supplierRef} type="text" name="supplierName" id="2" required />
                    </div> <br />
                    <div className='d-flex justify-content-center my-4'>
                        <input className='login-btn rounded' type="submit" value="Add Item" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;