import debug from "debug";

const log = debug("sw:service:api");

export async function getData() {
    const url = "https://api.airtable.com/v0/appRfcriPedzqlVwe/Table%201?maxRecords=3&view=Grid%20view";
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer patM5n44wP14SyEwb.f39613d95b172699fecd9af4d03c016c885e3d54106119feef05d537384ece1a",
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
    const url = "https://api.airtable.com/v0/appRfcriPedzqlVwe/Table%201?maxRecords=3&view=Grid%20view";
    log("formData, %o", formData);
    const payload = { fields: { ...formData, age: Number(formData.age) } };
    console.log()
    log("payload, %o", payload);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer patM5n44wP14SyEwb.f39613d95b172699fecd9af4d03c016c885e3d54106119feef05d537384ece1a",
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      const result = { id: json.id, ...json.fields };
      log("result %o", result);
      return result;
    } catch (error) {
      console.error(error.message);
    }
  };