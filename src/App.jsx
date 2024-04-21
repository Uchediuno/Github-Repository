import axios from "axios";
import SearchBar from "./components/SearchBar";
import CardDisplay from "./components/CardDisplay";
import DisplayPage from "./components/DisplayPage";
import { SimpleGrid } from "@chakra-ui/react";


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
