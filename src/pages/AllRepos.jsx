import React, { useEffect, useState } from "react";
import { SimpleGrid, Container, Flex } from "@chakra-ui/react";
import RepoCard from "../components/RepoCard";
import CreateButton from "../components/CreateButton";
import SearchBar from "../components/SearchBar";
import { getRepositories } from "../helper/apiCall";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";

function AllRepos() {
	const [repos, setRepos] = useState([]);
	const navigate = useNavigate();
	const [pages, setPages] = useState(1);

	useEffect(() => {
		getRepositories().then((repos) => {
			setPages(repos.length/10 < 1 ? 1 : Math.round(repos.length / 10));
			setRepos(repos);
		});
	}, []);
	
	return (
		<Container maxW="5xl">
			<Flex flexDirection={"column"} alignItems={"center"}>
				<CreateButton />
				<SearchBar />
				<SimpleGrid minChildWidth="420px" spacing={10} mt={35} width="100%">
					{repos.map((data) => (
						<RepoCard
							key={data.id}
							name={data.name}
							description={data.description}
							onClick={() => navigate(`/${data.name}`, { state: data })}
						/>
					))}
				</SimpleGrid>
				<Pagination pages={pages} />
			</Flex>
		</Container>
	);
}

export default AllRepos;
