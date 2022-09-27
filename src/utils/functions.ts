import { ListParams } from "models/common";

export function urlGenerate(params: ListParams) {
  let query = "";
  const keys = Object.keys(params);
  const values = Object.values(params);
  console.log("params", { keys, values });

  for (let i = 0; i < values.length; i++) {
    let value = values[i];
    if (value !== "") {
        query += `&${keys[i]}=${value}`;
      }
  }

  return query;
}
