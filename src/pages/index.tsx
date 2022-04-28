import { Flex, Button, Stack } from "@chakra-ui/react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "../components/Form/input"

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (value) => {

    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(value);
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        boxShadow="base"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input name="email" label="Email" type="email" {...register('email')} />
          <Input name="password" label="Password" type="password" {...register('password')} />
        </Stack>

        <Button type="submit" mt="6" colorScheme="teal" size="lg" isLoading={formState.isSubmitting} >Sign In</Button>

      </Flex>
    </Flex>
  )
}
