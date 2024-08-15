export default function FilmCard({ film }) {
    return (
      <>
        <dl>
          <dt>Title</dt>
          <dd>{film.title}</dd>

          <dt>Episode</dt>
          <dd>{film.episode_id}</dd>

          <dt>Director</dt>
          <dd>{film.director}</dd>
  
          <dt>Producer</dt>
          <dd>{film.producer}</dd>
  
          <dt>Release Date</dt>
          <dd>{film.release_date}</dd>

        </dl>
      </>
    );
  }
  