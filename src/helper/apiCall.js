import axios from "axios";

export const getRepositories = async () => {
	try {
		const res = await axios.get("https://api.github.com/users/uchediuno/repos", {
			headers: {
				Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
			},
		});
		return res.data
	} catch (error) {
		console.log(error);
	}
};

