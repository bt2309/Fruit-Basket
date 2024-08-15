import { searchFruits } from "../services/films";

export default function FruitsSearch({ setFruits }) {
    const handleSearch = async (event) => {
        event.preventDefault();
        const search = event.target.seatch.value;
        const data = await searchFruits(search);
        // console.log(data);
        setFruits(data);
    };

    return (
        <form onSubmit={handleSearch}>
            <fieldset>
                <legend>Search</legend>
                <label>
                    Search Term: <input type="search" name="search" />
                </label>
                <button>Search</button>
            </fieldset>
        </form>        
    );
}