import React from "react";
import { getMenu } from "../../Services/getApiData";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  const data = useLoaderData();
  console.log(data.data);
  return (
    <div>
      <ul>
        {data.data.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const data = await getMenu();
  return data;
}
export default Menu;
