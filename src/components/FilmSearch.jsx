import { searchFilms } from "../services/filmService";

export default function FruitsSearch({ setFilms }) {
    const handleSearch = async (event) => {
        event.preventDefault();
        const search = event.target.seatch.value;
        const data = await searchFilms(search);
        // console.log(data);
        setFilms(data);
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