import React from "react";
import {
  Card,
  Box,
  SimpleGrid,
  CardBody,
  CardHeader,
  Heading,
  CardFooter,
  Button,
  Text,
} from "@chakra-ui/react";

// const githubAPI = axios.create({
//   baseURL: "https://api.github.com",
//   headers: {
//     Authorization: "token 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",
//   },
// });

// githubAPI
//   .get("/user/repos")
//   .then((response) => {
//     const repositories = response.data;
//     console.log(repositories);
//   })
//   .catch((error) => {
//     console.error("Error fetching repositories:", error);
//   });


function CardDisplay() {
  const repo = [
    {
      id: 1,
      name: "AltSchool",
      description: "This is a repository for AltSchool",
    },
    {
      id: 2,
      name: "Uche",
      description: "This is a repo for Uche",
    },
    {
      id: 2,
      name: "Uche",
      description: "This is a repo for Uche",
    },
    {
      id: 2,
      name: "Uche",
      description: "This is a repo for Uche",
    },
  ];
  return (
    <SimpleGrid columns={2} spacing={10} mt={35}>
      {repo.map(function (data) {
        return (
          <Box key={data.id}>
            <Card>
              <CardHeader>
                <Heading size="md">{data.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{data.description}</Text>
              </CardBody>
              <CardFooter>
                <Button>View more</Button>
              </CardFooter>
            </Card>
          </Box>
        );
      })}
    </SimpleGrid>
  );
}

export default CardDisplay;
