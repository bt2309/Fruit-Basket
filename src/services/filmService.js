const BASE_URL = "https://swapi.dev/api/";

export async function getFilms() {
  const url = `${BASE_URL}/films`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
    // console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

export async function searchFilms(search) {
  const url = `${BASE_URL}/films?search=${search}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    
    const json = await response.json();
    // console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}
