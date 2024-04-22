import { Center, Container } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import React from "react";


function CreateButton() {
    return (
        <Center mt={20}>
            <Button colorScheme='blue'> Create new Repository</Button>
        </Center>

    );
}

export default CreateButton;