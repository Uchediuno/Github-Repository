import React from "react";
import {
	Box,
	Flex,
	Text,
	Icon,
	AvatarGroup,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
} from "@chakra-ui/react";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import { useLocation } from "react-router-dom";


const SingleRepo = () => {
	const { state } = useLocation();
	return (
			<Box p={4}>
				<Flex
					alignItems="center"
					justifyContent="space-between"
					borderBottomWidth="1px"
					pb={4}
					mb={4}
				>
					<Box>
						<Text fontSize="2xl" fontWeight="bold">
							{state.name}
						</Text>
						<Text fontSize="md">{state.description}</Text>
					</Box>
				</Flex>

				<Flex align="center" mb={4}>
					<Icon as={FaStar} mr={2} />
					<Text mr={4}>Stars: {state.stargazers_count}</Text>
					<Icon as={FaCodeBranch} mr={2} />
					<Text mr={4}>Forks: {state.forks}</Text>
					<Icon as={FaEye} mr={2} />
					<Text>Watchers: {state.watchers}</Text>
				</Flex>

				<Box mb={4}>
					<Text fontSize="lg" fontWeight="bold" mb={2}>
						Branches: {state.default_branch}
					</Text>
					{/* <List spacing={2}>
          {branches.map(branch => <ListItem key={branch}>{branch}</ListItem>)}
        </List> */}
					<Text fontSize="lg" fontWeight="bold" mt={4} mb={2}>
						Tags:
					</Text>
					{/* <List spacing={2}>
          {tags.map(tag => <ListItem key={tag}>{tag}</ListItem>)}
        </List> */}
				</Box>

				{/* Contributors */}
				<Flex align="center" mt={4} mb={4}>
					<AvatarGroup size="md" max={2}>
						{/* {contributors.map(contributor => (
            <Avatar key={contributor.name} name={contributor.name} src={contributor.avatarUrl} />
          ))} */}
					</AvatarGroup>
					<Text ml={4}>Top Contributors</Text>
				</Flex>

				{/* Commits */}
				<Box overflowY="scroll" maxHeight="300px" mt={4}>
					<Table variant="simple">
						<Thead>
							<Tr>
								<Th>Message</Th>
								<Th>Author</Th>
								<Th>Date</Th>
							</Tr>
						</Thead>
						<Tbody>
							{/* {commits.map(commit => (
              <Tr key={commit.id}>
                <Td>{commit.message}</Td>
                <Td>{commit.author}</Td>
                <Td>{commit.date}</Td>
              </Tr>
            ))} */}
						</Tbody>
					</Table>
				</Box>
			</Box>
	);
};

export default SingleRepo;
