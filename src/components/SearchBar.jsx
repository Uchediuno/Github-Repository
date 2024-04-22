import {
  Container,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React from "react";

function SearchBar({onChange}) {
  return (
    <Container>
      <InputGroup mt={20}>
        <InputRightElement>
          <Search2Icon />
        </InputRightElement>
        <Input type="text" placeholder="Search" onChange={onChange}/>
      </InputGroup>
    </Container>
  );
}

export default SearchBar;
