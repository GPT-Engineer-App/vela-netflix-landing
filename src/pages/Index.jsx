import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="full" p={0} m={0} bg="black" color="white" height="100vh">
      <Flex justify="space-between" align="center" p={4}>
        <Image src="path_to_logo.png" alt="Vela Logo" boxSize="50px" mr={2} />
        <Heading as="h1" size="xl">
          Vela
        </Heading>
        <Button rightIcon={<FaRocket />} colorScheme="red" variant="solid">
          Launch App
        </Button>
      </Flex>
      <Flex direction="column" align="center" justify="center" height="calc(100vh - 64px)">
        <VStack spacing={4}>
          <Heading as="h2" size="2xl" fontWeight="bold">
            Unlimited movies, TV shows, and more.
          </Heading>
          <Text fontSize="2xl">Watch anywhere. Cancel anytime.</Text>
          <Button size="lg" colorScheme="red" borderRadius="full">
            Get Started
          </Button>
        </VStack>
        <Image src="https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWJzdHJhY3QlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcxNTMxMzk1OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Background" position="absolute" top={0} left={0} width="full" height="full" objectFit="cover" zIndex={-1} />
      </Flex>
    </Container>
  );
};

export default Index;
