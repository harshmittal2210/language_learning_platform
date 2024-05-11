import {
    Container,
    Flex,
    Heading,
    Spinner,
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
  } from '@tanstack/react-router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { ApiError, ItemsService } from '../../client'
import ActionsMenu from '../../components/Common/ActionsMenu'
import Navbar from '../../components/Common/Navbar'
import useCustomToast from '../../hooks/useCustomToast'
import useAuth, { isLoggedIn } from '../../hooks/useAuth'


export const Route = createFileRoute('/_layout/LanguageDetails')({
    component: LanguageDetails,
    beforeLoad: async () => {
      if (!isLoggedIn()) {
        throw redirect({
          to: '/login',
        })
      }
    },
  })

function LanguageDetails() {
  const language  = "English";
  const showToast = useCustomToast()
  const {
    data: items,
    isLoading,
    isError,
    error,
  } = useQuery('items', () => ItemsService.readItems({}))

  if (isError) {
    const errDetail = (error as ApiError).body?.detail
    showToast('Something went wrong.', `${errDetail}`, 'error')
  }

  // Assuming you have some data structure or API to fetch details about the language
  // For now, just display the language name
  return (
  <>
  {isLoading ? (
        // TODO: Add skeleton

        <Flex justify="center" align="center" height="100vh" width="full">
          <Spinner size="xl" color="ui.main" />
        </Flex>
      ) :(
        items && (
            <Container maxW="full">
              <Heading
                size="lg"
                textAlign={{ base: 'center', md: 'left' }}
                pt={12}
              >
                {language} Learning
              </Heading>
              <Navbar type={'Item'} />
              <TableContainer>
                <Table size={{ base: 'sm', md: 'md' }}>
                  <Thead>
                    <Tr>
                      <Th>ID</Th>
                      <Th>Title</Th>
                      <Th>Description</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {items.data.map((item) => (
                      <Tr key={item.id}>
                        <Td>{item.id}</Td>
                        <Td>{item.title}</Td>
                        <Td color={!item.description ? 'gray.400' : 'inherit'}>
                          {item.description || 'N/A'}
                        </Td>
                        <Td>
                          <ActionsMenu type={'Item'} value={item} />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Container>
          )

      )
    }
  </>
  )
};

export default LanguageDetails;