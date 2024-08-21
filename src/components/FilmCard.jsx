export default function FilmCard({ film }) {

  // const handleDelete = async (petId) => {
  //   //* fire the DELETE request
  //   // const petId = "xxx";
  //   const url = `http://localhost:3000/pets/${petId}`;
  //   try {
  //     const response = await fetch(url, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error(`Response status: ${response.status}`);
  //     }

  //     await response.json();
  //     setPets(pets.filter((pet) => pet.id !== petId));
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  //   //* update the state
  // };

    return (
      <>
        <dl>
          <dt>Title:</dt>
          <dd>{film.title}</dd>

          <dt>Episode:</dt>
          <dd>{film.episode_id}</dd>

          <dt>Director:</dt>
          <dd>{film.director}</dd>
  
          <dt>Producer:</dt>
          <dd>{film.producer}</dd>
  
          <dt>Release Date:</dt>
          <dd>{film.release_date}</dd>

          <button>Delete</button>

        </dl>
      </>
    );
  }
  