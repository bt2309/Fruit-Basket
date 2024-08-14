import { useEffect, useState } from "react"; 
import FruitsListPage from "./components/FruitsListPage";
import FruitsSearch from "./components/FruitsSearch";
import { getFruits } from "./services/films";
import './App.css'

function App() {
    const [ fruits, setFruits ] = useState([]);

    useEffect(() => {
        const loadFruits = async () => {
            const data = await getFruits();
            setFruits(data);
        };

        loadFruits();
    }, []);

    return (
        <>         
            <h1>Fruits Basket</h1>
            <FruitsSearch setFruits={setFruits} />
            <FruitsListPage fruits={fruits.results} />
            <nav>
                <h2>Fruits List</h2>
                <h2>Cart</h2>
                <h2>Calendar</h2>
            </nav>
        </>
    )
}

export default App;