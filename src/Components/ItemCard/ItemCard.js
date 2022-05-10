import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ItemCard.css'

const ItemCard = ({ item}) => {
    const { name, price, description, img, _id, quantity, supplier } = item
    const navigate = useNavigate()
    const handleDetails = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='col-lg-4'>
            <CardGroup className='shadow p-1 mb-5 bg-body rounded'>
                <Card>
                    <div>
                        <Card.Img variant="white img-fluid" src={img} />
                    </div>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <h6>Price: ${price}</h6>
                        <p>{description}</p>
                        <p><span className='fw-bold'>In-Stock:</span> <span className='text-danger fw-bold'> {quantity} pis</span></p>
                        <p><span className='fw-bold'>supplier:</span> {supplier}</p>
                    </Card.Body>
                    <div>
                        <button onClick={() => handleDetails(_id)} className='border-1 btn-dark all-btn'>Update</button>
                        
                    </div>
                </Card>
            </CardGroup>
        </div>
    );
};

export default ItemCard;