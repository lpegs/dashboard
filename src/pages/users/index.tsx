import { Box, Button, Checkbox, Flex, Heading, Icon, IconButton, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Pagination } from "../../components/Pagination";
import Link from "next/link";

export default function UserList() {

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
                            <Heading size="lg" fontWeight="normal">Users</Heading>
                            <Link href="/users/create" passHref>
                                <Button as="a" size="sm" fontSize="sm" colorScheme="teal" leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>Create new</Button>
                            </Link>
                        </Flex>

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
                                <Tr>
                                    <Td px={["4", "4", "6"]}>
                                        <Checkbox colorScheme="teal" />
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">Filipe Galelli Scaravonatto</Text>
                                            <Text fontSize="sm" color="gray.300">filipe_smo@hotmail.com</Text>
                                        </Box>
                                    </Td>
                                    { isWideVersion && <Td>26/04/2022</Td> }
                                    <Td px={["4", "4", "6"]}>
                                        <IconButton icon={<Icon as={RiPencilLine} fontSize="20"/>} aria-label="Edit user" variant="unstyled" />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td px={["4", "4", "6"]}>
                                        <Checkbox colorScheme="teal" />
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">Filipe Galelli Scaravonatto</Text>
                                            <Text fontSize="sm" color="gray.300">filipe_smo@hotmail.com</Text>
                                        </Box>
                                    </Td>
                                    { isWideVersion && <Td>26/04/2022</Td> }
                                    <Td px={["4", "4", "6"]}>
                                        <IconButton icon={<Icon as={RiPencilLine} fontSize="20"/>} aria-label="Edit user" variant="unstyled" />
                                    </Td>
                                </Tr><Tr>
                                    <Td px={["4", "4", "6"]}>
                                        <Checkbox colorScheme="teal" />
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">Filipe Galelli Scaravonatto</Text>
                                            <Text fontSize="sm" color="gray.300">filipe_smo@hotmail.com</Text>
                                        </Box>
                                    </Td>
                                    { isWideVersion && <Td>26/04/2022</Td> }
                                    <Td px={["4", "4", "6"]}>
                                        <IconButton icon={<Icon as={RiPencilLine} fontSize="20"/>} aria-label="Edit user" variant="unstyled" />
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>

                        <Pagination />

                    </Box>

                </Flex>

        </Box>
    );
}