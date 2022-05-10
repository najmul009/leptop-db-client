import useItems from '../../Hooks/useItems';
import CustomLink from '../CoustomLink/CoustomLink';
import './Inventory.css'

const Inventory = () => {
    const [Items, setItems] = useItems()
    
    const demoUser = Items[0];
    return (
        <div className='inventory-section container'>
            <h1 className='text-center my-4'>Manage Items DashBord</h1>
            <div className="data-table">
                <table class="table">
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
                        <tr>
                            <th scope="row">1</th>
                            <td><img width={100} src={demoUser?.img} alt="" /></td>
                            <td>{demoUser?.name}</td>
                            <td>{demoUser?.quantity}</td>
                            <td>{demoUser?.supplier}</td>
                            <td>
                                <CustomLink className='uNone login-btn rounded' to='/login'>
                                    <span className='text-shadow'>Update</span>
                                </CustomLink>
                                <div className="mt-3">
                                <CustomLink className='uNone login-btn rounded' to='/login'>
                                    <span className='text-shadow'>Update</span>
                                </CustomLink>
                                </div>
                            </td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Inventory;