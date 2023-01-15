import { Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, InputGroup, InputRightElement, Link, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";

export default function Home() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  // turn on error if on submit the email field is empty
  const [isEmailError, setIsEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  return (
    <>
      <Head>
        <title>FaSock chat-app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex minH="100vh" h="full" justifyContent="center" alignItems="center">
        <VStack bg="ThreeDDarkShadow" p="4" rounded="md" maxW="90%" w="md">
          <Heading>Register Form</Heading>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type="text" onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl isRequired isInvalid={isEmailError}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            {!isEmailError ? <FormHelperText>We'll never share your email.</FormHelperText> : <FormErrorMessage>Email is required.</FormErrorMessage>}
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button leftIcon={<FiLogIn />} colorScheme="purple" variant="solid" alignSelf="stretch">
            Sign Up
          </Button>
          <Text>
            Already have an account?{" "}
            <Link as={NextLink} href="/">
              Sign In
            </Link>
          </Text>
        </VStack>
      </Flex>
    </>
  );
}
