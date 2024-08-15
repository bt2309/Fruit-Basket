export default function FilmCard({ film }) {
    return (
      <>
        <dl>
          <dt>Title</dt>
          <dd>{film.results.title}</dd>

          <dt>Episode</dt>
          <dd>{film.results.episode_id}</dd>

          <dt>Director</dt>
          <dd>{film.results.director}</dd>
  
          <dt>Producer</dt>
          <dd>{film.results.producer}</dd>
  
          <dt>Release Date</dt>
          <dd>{film.results.release_date}</dd>

        </dl>
      </>
    );
  }
  