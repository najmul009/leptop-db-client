import useItems from '../../Hooks/useItems';
import ItemRow from '../ItemRow/ItemRow';
import './Inventory.css'

const Inventory = () => {
    const [Items, setItems] = useItems()
    
    return (
        <div className='inventory-section container'>
            <h1 className='text-center my-4'>Manage Items DashBord</h1>
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
                          Items.map((item,index)  => 
                          <ItemRow
                          key={item._id}
                          index={index}
                          item={item}
                          ></ItemRow>)  
                        }
                        

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Inventory;