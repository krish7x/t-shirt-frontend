import { API } from "../../backend";

export const getProducts = async () => {
	return await fetch(`${API}/products`, {
		method: "GET",
		mode: "cors",
	})
		.then((res) => res.json())
		.catch((err) => console.log(err));
};
