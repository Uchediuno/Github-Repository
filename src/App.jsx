import axios from "axios";
import SearchBar from "./components/SearchBar";
import CardDisplay from "./components/CardDisplay";
import DisplayPage from "./components/DisplayPage";
import Button from "./components/CreateButton";
import { SimpleGrid } from "@chakra-ui/react";
import CreateButton from "./components/CreateButton";

const githubAPI = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: "token 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",
  },
});

githubAPI
  .get("/user/repos")
  .then((response) => {
    const repositories = response.data;
    console.log(repositories);
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error);
  });

function App() {
  return (
    <>
      <SimpleGrid columns={1} px={40}>
        <SearchBar />
        <CardDisplay />
        <CreateButton />
      </SimpleGrid>
    </>
  );
}

export default App;
