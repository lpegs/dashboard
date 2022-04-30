import { Box, Button, Checkbox, Flex, Heading, Icon, IconButton, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Pagination } from "../../components/Pagination";
import Link from "next/link";
import { useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";

export default function UserList() {

    const [ page, setPage ] = useState(1);

    console.log(page)

    const { data, isLoading, isFetching, error } = useUsers(page)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Box>

            <Header />

                <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

                    <Sidebar />

                    <Box flex="1" borderRadius="8" bg="gray.800" p="8">
                        <Flex mb="8" justify="space-between" align="center">
                            <Heading size="lg" fontWeight="normal">
                                Users
                                { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"></Spinner> }
                            </Heading>
                            <Link href="/users/create" passHref>
                                <Button as="a" size="sm" fontSize="sm" colorScheme="teal" leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>Create new</Button>
                            </Link>
                        </Flex>

                        { isLoading ? (
                            <Flex justify="center" >
                                <Spinner/>
                            </Flex>
                        ) : error ? (
                            <Flex justify="center">
                                <Text>Failed to get user data</Text>
                            </Flex>
                        ) : (
                            <>
                                <Table colorScheme="whiteAlpha">
                                    <Thead>
                                        <Tr>
                                            <Th px={["4", "4", "6"]} color="gray.300" w="8">
                                                <Checkbox colorScheme="teal" />
                                            </Th>
                                            <Th>User</Th>
                                            { isWideVersion && <Th>Date</Th> }
                                            <Th></Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {data.users.map(user => {
                                            return(
                                                <Tr key={user.id}>
                                                    <Td px={["4", "4", "6"]}>
                                                        <Checkbox colorScheme="teal" />
                                                    </Td>
                                                    <Td>
                                                        <Box>
                                                            <Text fontWeight="bold">{user.name}</Text>
                                                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                                        </Box>
                                                    </Td>
                                                    { isWideVersion && <Td>{user.createdAt}</Td> }
                                                    <Td px={["4", "4", "6"]}>
                                                        <IconButton icon={<Icon as={RiPencilLine} fontSize="20"/>} aria-label="Edit user" variant="unstyled" />
                                                    </Td>
                                                </Tr>
                                            )
                                        })}
                                    </Tbody>
                                </Table>

                                <Pagination
                                    totalCountOfRegisters={data.totalCount}
                                    currentPage={page}
                                    onPageChange={setPage}
                                />
                            </>
                        )}

                    </Box>

                </Flex>

        </Box>
    );
}