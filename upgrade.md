In 'FilmListPage', after clicking onto 'FilmCard', user will be navigated to a new 'FilmCardDetails' page to show more details regarding the characters involved in selected firm.

-> useNavigate from react-router-dom to navigate user to 'FilmCardDetails' page after <button onClick={handleClick}>
-> retrieve name of characters from getFilm()
-> In 'FilmCardDetails', under return (), map out all characters, {results.character}
-> getFilm() inside of useEffect() to load.

In 'FilmCardDetails' page, characters will have clickable links to direct users to the 'CharacterDetails' page where 'Name', 'Height', 'Hair Colour', 'Eye Colour', 'Gender' & 'Birth Year' is shown.

-> useNavigate from react-router-dom to navigate user to 'CharacterDetails' page after <button onClick={handleClick}>
-> retrieve character's detailed info from getFilm()
-> In 'CharacterDetails' page, under return(), map out character details, e.g. {character.height}
-> getCharacter() inside of useEffect() to load.
