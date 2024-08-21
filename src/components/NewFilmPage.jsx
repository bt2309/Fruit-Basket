import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createFilm, getData } from "../services/airtable";

export default function NewFilmPage() {
    
    const navigate = useNavigate();
    const [ films, setFilms] = useState([]);
    const [ formData, setFormData ] = useState({
        title: "",
        episodeId: "",
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
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const film = await createFilm(formData);
        setFilms([...films, film]);
        console.log(films);
        navigate("/films");
      };
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>New Film</h3>
                <div className="new-form">
                <label>
                    Title:
                    <input name="title" value={formData.title} onChange={handleChange}/>
                </label>
                <label>
                    Episode:
                    <input name="episodeId" value={formData.episodeId} onChange={handleChange}/>
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
                    <button type="submit">Add</button>
                </div>
            </form>
        </>
    )
}

