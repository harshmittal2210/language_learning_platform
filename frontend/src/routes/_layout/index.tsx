import { Box, Container, Text } from '@chakra-ui/react'
import { useQueryClient } from 'react-query'
import { createFileRoute,redirect } from '@tanstack/react-router'

import { UserOut } from '../../client'

export const Route = createFileRoute('/_layout/')({
  component: Dashboard,
})

function Dashboard() {
  const queryClient = useQueryClient()

  const currentUser = queryClient.getQueryData<UserOut>('currentUser')
  const languages = ['English', 'Hindi', 'Sanskrit', 'French'];
  return (
    <>
      <Container maxW="full">
        <Box pt={12} m={4}>
          <Text fontSize="2xl">
            Hi, {currentUser?.full_name || currentUser?.email} 👋🏼
          </Text>
          <Text>Welcome back, nice to see you again!</Text>
        </Box>

        <Text>Select The Language you want to learn today</Text>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {languages.map((language, index) => (
            <Box
              key={index}
              m={2}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              textAlign="center"
              cursor="pointer"
              boxShadow="md"
              // Add onClick handler to do something when a language box is clicked
              onClick={() => {throw redirect({
                to: '/LanguageDetails',
              })}}
            >
              <Text>{language}</Text>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  )
}

export default Dashboard
