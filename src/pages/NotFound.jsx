import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";

function NotFound() {
	return (
		<Container marginTop={50}>
			<Box p={4}>
				<Text fontSize="5xl" fontWeight="bold">
					404 - Page Not Found
				</Text>
				<Text fontSize="2xl" mt={2}>Oops! The page you're looking for doesn't exist.</Text>
			</Box>
		</Container>
	);
}

export default NotFound;
