const BASE_URL = "https://swapi.dev/api";

export async function searchFilms(search) {
  const url = `${BASE_URL}/films?search=${search}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
};

export async function searchCharacters(search) {
    const url = `${BASE_URL}/people?search=${search}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }


// export async function getFilms() {
//   const url = `${BASE_URL}/films/?format=json`;
//   const option = {method: "GET", headers: {"Content-Type": "application/json"}}
//   try {
//     const response = await fetch(url, option);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     // const x = json.result
//     console.log(json);
//     return json;
    
//   } catch (error) {
//     console.error(error.message);
//   }
// }
