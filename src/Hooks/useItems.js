import { useEffect, useState } from "react";

const useItems = () => {

    const [Items, setItems] = useState([]);
    
    useEffect(() => {
        console.log('Items');
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    console.log(Items);
    return [Items, setItems];
}

export default useItems;