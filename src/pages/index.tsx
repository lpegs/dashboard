import { Flex, Button, Stack } from "@chakra-ui/react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "../components/Form/input"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required"),
})

export default function SignIn() {

  const { register, handleSubmit, formState: { errors }, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  
  console.log(errors)

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
          <Input 
            name="email" 
            label="Email" 
            type="email" 
            error={errors.email}
            {...register('email')} 
          />

          <Input 
            name="password" 
            label="Password" 
            type="password" 
            error={errors.password} 
            {...register('password')} />
        </Stack>

        <Button type="submit" mt="6" colorScheme="teal" size="lg" isLoading={formState.isSubmitting} >Sign In</Button>

      </Flex>
    </Flex>
  )
}
