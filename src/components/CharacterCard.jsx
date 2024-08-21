export default function CharacterCard({ character }) {
    return (
      <>
        <dl>
          <dt>Name:</dt>
          <dd>{character.name}</dd>

          <dt>Height:</dt>
          <dd>{character.height}</dd>

          <dt>Hair Colour:</dt>
          <dd>{character.hair_color}</dd>
  
          <dt>Eye Colour:</dt>
          <dd>{character.eye_color}</dd>
  
          <dt>Birth Year:</dt>
          <dd>{character.birth_year}</dd>

          <dt>Gender:</dt>
          <dd>{character.gender}</dd>

        </dl>
      </>
    );
  }
  