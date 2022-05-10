import React from 'react';
import useItems from '../../Hooks/useItems';
import Banner from '../Banner/Banner';
import CustomLink from '../CoustomLink/CoustomLink';
import ItemCard from '../ItemCard/ItemCard';

const Home = () => {
    const [Items] = useItems()
    const demoItems = Items.slice(0, 6);
    
    return (
        <div>
            <Banner></Banner>
            <div className='mt-5 container'>
                <h2 className='text-center text-success'>Inventory Items</h2>
                <div className="mt-5 row">
                    {
                        demoItems.map(item => <ItemCard
                            key={item._id}
                            item={item} >
                        </ItemCard>)
                    }
                </div>
                <div className='d-flex justify-content-center mb-5 bottom'>
                    <CustomLink to="/inventory" className="login-btn p-2 rounded">Show All Items</CustomLink>
                </div>
            </div>
        </div>
    );
};

export default Home;