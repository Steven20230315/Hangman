import axios from "axios";

export const wordLoader = async () => {
	const data = await axios.get("test");
	console.log(data);
};
