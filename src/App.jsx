import axios from "axios";
import SearchBar from "./components/SearchBar";
import CardDisplay from "./components/CardDisplay";
import DisplayPage from "./components/DisplayPage";
import { SimpleGrid } from "@chakra-ui/react";

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
      </SimpleGrid>
    </>
  );
}

export default App;
