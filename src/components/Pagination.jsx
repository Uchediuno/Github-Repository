import { Box, Card, Flex } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ pages }) => {
	const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);
	return (
		<Box>
			<Flex gap={2}>
				{pageNumbers.map((pageNumber) => (
					<Card
						p={2}
						textAlign="center"
						key={pageNumber}
						mt={10}
						mb={10}
						width={50}
					>
						{pageNumber}
					</Card>
				))}
			</Flex>
		</Box>
	);
};

export default Pagination;
