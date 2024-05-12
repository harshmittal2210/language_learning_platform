import React from 'react';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/EnglishQuiz')({
  component: EnglishQuiz,
})

function EnglishQuiz() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxW="xl" centerContent>
      <Stack spacing={6} mt={8} w="100%" maxW="lg">
        <Text fontSize="2xl" fontWeight="bold">
          English Quiz Q1
        </Text>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <FormControl>
            <FormLabel htmlFor="noun">Noun</FormLabel>
            <Input id="noun" type="text" placeholder="Enter a noun" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="verb">Verb</FormLabel>
            <Input id="verb" type="text" placeholder="Enter a verb" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="adjective">Adjective</FormLabel>
            <Input id="adjective" type="text" placeholder="Enter an adjective" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="sentence">Complete the Sentence</FormLabel>
            <Input id="sentence" type="text" placeholder="Complete the sentence" />
          </FormControl>
          <Button type="submit" bg="ui.main" color="white" _hover={{ opacity: 0.8 }}>
            Submit
          </Button>
        </form>
      </Stack>
    </Container>
  );
}

export default EnglishQuiz;
