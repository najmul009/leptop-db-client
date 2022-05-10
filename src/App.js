import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Components/AddItem/AddItem';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import Login from './Components/Login/Login';
import MyItem from './Components/MyItem/MyItem';
import Notmatch from './Components/Notmatch/Notmatch';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <ItemDetails></ItemDetails>
          </RequireAuth>
        }>
        </Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/myitem' element={<MyItem></MyItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<Notmatch></Notmatch>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
