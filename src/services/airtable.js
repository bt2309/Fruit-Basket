// import debug from "debug";

// const log = debug("sw:service:api");

export async function getData() {
    const url = "https://api.airtable.com/v0/appRfcriPedzqlVwe/Films";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer patTMe0YVagt5lVQG.b9192ab1401a42a693377a0c50db92fa39f98ae55d4ec4b31600b2aa6037b8c7",
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      return json.records.map((record) => {
        return {
          id: record.id,
          ...record.fields,
        };
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  export const createFilm = async (formData) => {
    const url = "https://api.airtable.com/v0/appRfcriPedzqlVwe/Films";
    const payload = { records: [{fields: { ...formData }} ]};
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer patTMe0YVagt5lVQG.b9192ab1401a42a693377a0c50db92fa39f98ae55d4ec4b31600b2aa6037b8c7",
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      const result = { id: json.id, ...json.fields };
    //   console.log(result);
      return result;
    } catch (error) {
      console.error(error.message);
    }
  };