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
