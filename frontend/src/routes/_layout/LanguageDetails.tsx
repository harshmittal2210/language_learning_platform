import {
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import {
  Link as RouterLink,
  createFileRoute,
  redirect,
  useNavigate,
} from '@tanstack/react-router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { ApiError, ItemsService } from '../../client'
import ActionsMenu from '../../components/Common/ActionsMenu'
import Navbar from '../../components/Common/Navbar'
import useCustomToast from '../../hooks/useCustomToast'
import useAuth, { isLoggedIn } from '../../hooks/useAuth'
import {
  Container,
  Flex,
  Heading,
  Spinner,
  Text,
  Box,
  Progress,
} from '@chakra-ui/react';
import { useState } from 'react';




// Static data for language details
const languages = [
  {
    id: 1,
    name: 'English',
    description: 'A widely spoken language.',
    progress: 75, // Progress in percentage
  },
  {
    id: 2,
    name: 'Spanish',
    description: 'One of the most spoken languages in the world.',
    progress: 50,
  },
  {
    id: 3,
    name: 'French',
    description: 'Known as the language of love.',
    progress: 25,
  },
  {
    id: 4,
    name: 'Mandarin Chinese',
    description: 'The most spoken language in the world.',
    progress: 80,
  },
  {
    id: 5,
    name: 'Arabic',
    description: 'A language with a rich history and cultural significance.',
    progress: 0,
  },
  {
    id: 6,
    name: 'Russian',
    description: 'The largest native language in Europe.',
    progress: 0,
  },
  {
    id: 7,
    name: 'German',
    description: 'A key language for business and engineering.',
    progress: 70,
  },
  {
    id: 8,
    name: 'Japanese',
    description: 'Known for its unique writing system and rich culture.',
    progress: 55,
  },
  {
    id: 9,
    name: 'Portuguese',
    description: 'Spoken in several countries across the world.',
    progress: 0,
  },
];



export const Route = createFileRoute('/_layout/LanguageDetails')({
  component: LanguageDetails,
  // beforeLoad: async () => {
  //   if (!isLoggedIn()) {
  //     throw redirect({
  //       to: '/login',
  //     })
  //   }
  // },
})

function LanguageDetails() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating loading delay
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);
  const navigate = useNavigate();

  // Handle card click
  const handleCardClick = (name: string) => {
    // navigate(`/LanguageDetails/content/${name}`);
  };

  return (
    <>
      {isLoading ? (
        <Flex justify="center" align="center" height="100vh" width="full">
          <Spinner size="xl" color="ui.main" />
        </Flex>
      ) : (
        <Container maxW="full">
          <Heading size="lg" textAlign={{ base: 'center', md: 'left' }} pt={12}>
            Language Learning
          </Heading>
          <Flex flexWrap="wrap" mt={8}>
            {languages.map((language) => (
              <Box
                key={language.id}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                m={4}
                p={4}
                boxShadow="lg"
                width={{ base: '100%', md: '45%', lg: '30%' }}
              >
                <Link
                  as={RouterLink}
                  to={`/LanguageDetails/content/${language.name}`}
                  onClick={() => handleCardClick(language.name)}
                >
                  <Heading size="md" mb={2}>
                    {language.name}
                  </Heading>
                </Link>

                <Text fontSize="sm" color="gray.500" mb={2}>
                  {language.description}
                </Text>
                <Progress value={language.progress} mb={2} />
                <Text fontSize="sm" color="gray.500">
                  {language.progress}% Complete
                </Text>
              </Box>
            ))}
          </Flex>
        </Container>
      )}
    </>
  );
};

export default LanguageDetails;