import { useEffect, useState } from "react";

const useItems = () => {

    const [Items, setItems] = useState([]);
    
    useEffect(() => {
        fetch('https://intense-spire-62370.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return [Items, setItems];
}

export default useItems;