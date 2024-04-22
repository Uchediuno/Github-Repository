import axios from "axios";

export const getRepositories = async () => {
	try {
		const res = await axios.get("https://api.github.com/users/uchediuno/repos", {
			headers: {
				Authorization: "token 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"
			},
		});
		return res.data
	} catch (error) {
		console.log(error);
	}
};

