const API = `https://react-fast-pizza-api.onrender.com/api`;

export async function getMenu() {
  const res = await fetch(`${API}/menu`);
  const data = await res.json();
  return data;
}
