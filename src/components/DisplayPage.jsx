import { Box, Center, Heading, SimpleGrid, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

function DisplayPage() {
  return (
    <>
      <Heading mb={10}>
        <Center className="heading">Repository One</Center>
      </Heading>
      <SimpleGrid columns={1} mx={10}>
        <Box>
          <Table variant='striped'>
            <Thead>
                <Tr>
                    <Th>ID</Th>
                    <Th>Title</Th>
                    <Th>Description</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>1</Td>
                    <Td>Name</Td>
                    <Td>Uche's Assignment</Td>
                </Tr>
            </Tbody>
          </Table>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default DisplayPage;
