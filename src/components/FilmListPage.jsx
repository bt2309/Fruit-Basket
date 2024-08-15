import FilmCard from "./FilmCard";

export default function FilmListPage({ films }) {
    if (!films || films.length === 0) {
        return <p>No films</p>;
    }

    return (
        <>
            <p>Films List</p>
            {films.map((film) => (
                <FilmCard key={film.episode_id} film={film} />
            ))}
        </>
    );
}