import axios from "axios";

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
