import { 
  Box, 
  Container, 
  HStack, 
  Text
} from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";

const Header = () => {
  const bg = 'white';
  const borderColor = 'gray.200';

  return (
    <Box 
      as="header" 
      bg={bg} 
      borderBottom="1px" 
      borderColor={borderColor}
      shadow="sm"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Container maxW="6xl" py={4}>
        <HStack justify="space-between" align="center">
          <Link to="/">
            <Text 
              fontSize="xl" 
              fontWeight="bold" 
              color="blue.600"
              _hover={{ 
                color: "blue.700"
              }}
              transition="color 0.2s"
              cursor="pointer"
            >
              Sports Leagues
            </Text>
          </Link>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header; 