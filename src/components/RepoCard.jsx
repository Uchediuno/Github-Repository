import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	Text,
} from "@chakra-ui/react";
import React from "react";

const RepoCard = ({ name, description, onClick }) => {
	const descShort = description?.slice(0, 80);
	return (
		<Box>
			<Card minHeight={240} width={380}>
				<CardHeader>
					<Heading size="md">{name}</Heading>
				</CardHeader>

				<CardBody>{descShort && <Text>{descShort}...</Text>}</CardBody>

				<CardFooter>
					<Button onClick={onClick}>View more</Button>
				</CardFooter>
			</Card>
		</Box>
	);
};

export default RepoCard;
