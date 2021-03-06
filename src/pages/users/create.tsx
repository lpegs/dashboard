import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from "react-hook-form"
import { useMutation } from "react-query"
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";


type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }
  
  const CreateUserFormSchema = yup.object().shape({
    name: yup.string().required("Enter your name"),
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup.string().required("Password is required").min(6, "Minimum 6 characters"),
    password_confirmation: yup.string().oneOf([null, yup.ref("password")], "Password does not match"),
  })




export default function CreateUser() {

    const router = useRouter();

    const createUser = useMutation(async (user: CreateUserFormData) => {
        const response = await api.post("users", {
            user: {
                ...user,
                created_at: new Date(),
            }
        })

        return response.data.user;

    }, {
        onSuccess: () => {
            queryClient.invalidateQueries("users")
        }
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
      
        await createUser.mutateAsync(values)

        router.push("/users")
    
      }

    const { register, handleSubmit, formState: { errors }, formState } = useForm({
        resolver: yupResolver(CreateUserFormSchema)
      })    

    return (
        <Box>

            <Header />

                <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

                    <Sidebar />

                    <Box 
                        as="form" 
                        flex="1" 
                        borderRadius="8" 
                        bg="gray.800" 
                        p={["6", "8"]}
                        onSubmit={handleSubmit(handleCreateUser)}
                    >
                        <Heading size="lg" fontWeight="normal" >Create user</Heading>
                        <Divider my="6" borderColor="gray.700" />
                        <VStack spacing="8">
                            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                                <Input 
                                    name="name" 
                                    label="Name" 
                                    {...register('name')}
                                    error={errors.name}
                                />
                                <Input 
                                    name="email" 
                                    label="Email" 
                                    {...register('email')}
                                    error={errors.email}
                                />
                            </SimpleGrid>
                            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                                <Input 
                                    name="password" 
                                    type="password" 
                                    label="Password"
                                    {...register('password')}
                                    error={errors.password}
                                />
                                <Input 
                                    name="password_confirmation" 
                                    type="password" 
                                    label="Confirm your password" 
                                    {...register('password_confirmation')}
                                    error={errors.password_confirmation}
                                />
                            </SimpleGrid>
                        </VStack>

                        <Flex mt="8" justify="flex-end">
                            <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancel</Button>
                            </Link>
                                <Button 
                                    type="submit" 
                                    colorScheme="teal"
                                    isLoading={formState.isSubmitting}
                                >
                                    Submit
                                </Button>
                            </HStack>
                        </Flex>

                    </Box>

                </Flex>

        </Box>
    );
}