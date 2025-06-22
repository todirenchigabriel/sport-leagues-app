import { 
  Box, 
  VStack, 
  HStack,
  Text, 
  Badge,
  Heading
} from "@chakra-ui/react";
import { type League } from "@/hooks/useLeagues";

interface LeagueCardProps {
  league: League;
  onClick?: (leagueId: string) => void;
}

const LeagueCard = ({ league, onClick }: LeagueCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(league.idLeague);
    }
  };

  return (
    <Box
      bg="white"
      p={6}
      rounded="lg"
      shadow="md"
      borderWidth="1px"
      borderColor="gray.200"
      _hover={{ 
        transform: "translateY(-2px)", 
        shadow: "lg",
        borderColor: "blue.300",
        cursor: onClick ? "pointer" : "default"
      }}
      transition="all 0.2s"
      onClick={handleClick}
    >
      <VStack align="start" gap={4}>
        <Heading size="md" color="blue.600">
          {league.strLeague}
        </Heading>
        
        <HStack>
          <Badge colorScheme="green" variant="solid" fontSize="sm">
            {league.strSport}
          </Badge>
        </HStack>

        {league.strLeagueAlternate && (
          <Box>
            <Text fontSize="sm" color="gray.600" fontWeight="medium">
              Also known as:
            </Text>
            <Text fontSize="sm" color="gray.800" mt={1}>
              {league.strLeagueAlternate}
            </Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default LeagueCard; 