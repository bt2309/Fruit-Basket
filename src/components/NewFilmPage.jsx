import { useEffect, useState } from "react";
import { createFilm, getData } from "../services/airtable";

export default function NewFilmPage() {
    
    const [ films, setFilms] = useState([]);
    const [ formData, setFormData ] = useState({
        title: "",
        episode: "",
        director: "",
        producer: "",
        release_date: "",
    });

    useEffect(() => {
        const loadFilms = async () => {
            const data = await getData();
            setFilms(data);
        };
        loadFilms();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleCreate = async (event) => {
        event.preventDefault();
        const film = await createFilm(formData);
        setFilms([...films, film]);
      };
    
    return (
        <>
            <form onSubmit={handleCreate}>
                <h3>New Film</h3>
                <body className="new-form">
                <label>
                    Title:
                    <input name="title" value={formData.title} onChange={handleChange}/>
                </label>
                <label>
                    Episode:
                    <input name="episode" value={formData.episode} onChange={handleChange}/>
                </label>
                <label>
                    Director:
                    <input name="director" value={formData.director} onChange={handleChange}/>
                </label>
                <label>
                    Producer:
                    <input name="producer" value={formData.producer} onChange={handleChange}/>
                </label>
                <label>
                    Release Date:
                    <input name="release_date" value={formData.release_date} onChange={handleChange}/>
                </label>
                <button>Add</button>
                </body>
            </form>
        </>
    )
}

