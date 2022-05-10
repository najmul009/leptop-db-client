import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ItemRow from '../ItemRow/ItemRow';


import './MyItem.css'

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        const getItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/additem?email=${email}`;
            try {
                const myData = await axios.get(url);
                setMyItems(myData.data);
               
            }
            catch (error) {
                console.log(error.message);
            }
        }
        getItems();
        
    }, [user])
    console.log(myItems);
    const handleDelete=(id)=>{
        const proceed=window.confirm('Are You Sure?')
        if(proceed){
          const url=`http://localhost:5000/inventory/${id}`
          fetch(url,{
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            const remaining=myItems.filter(item=>item._id!==id)
            setMyItems(remaining)
          })
        }
      }
    return (
        <div className='container myitem-section'>
            <h1>my items</h1>
            <div className="data-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Demo</th>
                            <th scope="col">Model</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Manage</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          myItems.map((item,index)  => 
                          <ItemRow
                          key={item._id}
                          index={index}
                          item={item}
                          deleteItem={handleDelete}
                          ></ItemRow>)  
                        }
                        

                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default MyItem;