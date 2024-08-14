const BASE_URL = "https://mhw-db.com/monsters";

export async function getFruits() {
  const url = `${BASE_URL}`;
//   const url = `${BASE_URL}/fruits`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    // return json;
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

export async function searchFruits(search) {
  const url = `${BASE_URL}/fruits?search=${search}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}
