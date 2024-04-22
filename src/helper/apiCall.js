import axios from "axios";

// const githubAPI = axios.create({
// 	baseURL: "https://api.github.com",
// 	headers: {
// 		Authorization: "token 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",
// 	},
// });

// githubAPI
// 	.get("/user/repos")
// 	.then((response) => {
// 		const repositories = response.data;
// 		console.log(repositories);
// 	})
// 	.catch((error) => {
// 		console.error("Error fetching repositories:", error);
// 	});

export const getRepositories = async () => {
	try {
		const res = await axios.get("https://api.github.com/users/uchediuno/repos", {
			headers: {
				Authorization: "token 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",
			},
		});
		return res.data
	} catch (error) {
		console.log(error);
	}
};

