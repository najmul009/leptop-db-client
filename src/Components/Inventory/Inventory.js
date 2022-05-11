import useItems from '../../Hooks/useItems';
import CustomLink from '../CoustomLink/CoustomLink';
import ItemRow from '../ItemRow/ItemRow';
import './Inventory.css'

const Inventory = () => {
    const [Items, setItems] = useItems()
    
    
    const handleDelete=(id)=>{
        const proceed=window.confirm('Are You Sure?')
        if(proceed){
          const url=`https://intense-spire-62370.herokuapp.com/inventory/${id}`
          fetch(url,{
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            const remaining=Items.filter(item=>item._id!==id)
            setItems(remaining)
          })
        }
      }

    return (
        <div className='inventory-section container'>
            <h1 className='text-center my-4'>Manage Items DashBord</h1>
            <div className="text-center my-4">
            <CustomLink className='uNone login-btn rounded ' to='/additem'><span className='text-shadow'>+ Add new Item</span></CustomLink>
            </div>
            <div className="data-table table-responsive">
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
                          Items.map((item,index)  => 
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

export default Inventory;