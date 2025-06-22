import React from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  Spinner,
  SimpleGrid,
  Box,
  VStack,
  HStack,
  Text,
  Center,
} from "@chakra-ui/react";
import { toaster } from "@/components/Toaster";
import LeagueCard from "@/components/LeagueCard";
import SearchBar from "@/components/SearchBar";
import DropdownFilter from "@/components/DropdownFilter";
import { useLeagues, type League } from "@/hooks/useLeagues";

const LeaguesPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedSport, setSelectedSport] = React.useState("");
  
  const { data, isLoading, error } = useLeagues();
  const navigate = useNavigate();

  const handleLeagueClick = (leagueId: string) => {
    navigate({ to: '/league/$leagueId', params: { leagueId } });
  };

  React.useEffect(() => {
    if (error) {
      toaster.create({
        title: "Error loading leagues",
        description: error.message,
        type: "error",
        duration: 5000,
        closable: true,
      });
    }
  }, [error]);

  if (isLoading) {
    return (
      <Center py={20}>
        <VStack gap={4}>
          <Spinner size="xl" color="blue.500" />
          <Text color="gray.600">
            Loading leagues...
          </Text>
        </VStack>
      </Center>
    );
  }

  const allLeagues = data?.leagues || [];

  const uniqueSports: string[] = Array.from(
    new Set(allLeagues.map((league: League) => league.strSport).filter(Boolean))
  ).sort() as string[];

  const filteredLeagues = allLeagues.filter((league: League) => {
    const matchesSearch =
      league.strLeague.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (league.strLeagueAlternate &&
        league.strLeagueAlternate
          .toLowerCase()
          .includes(searchTerm.toLowerCase()));

    const matchesSport =
      selectedSport === "" || league.strSport === selectedSport;

    return matchesSearch && matchesSport;
  });

  return (
    <Box>
      <VStack gap={6} align="stretch">
        <VStack gap={4} align="stretch">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Search leagues by name..."
          />

          <HStack justify="center" gap={4}>
            <DropdownFilter
              label="Filter by Sport:"
              placeholder="All Sports"
              options={uniqueSports}
              value={selectedSport}
              onChange={setSelectedSport}
              size="md"
              width="250px"
            />
          </HStack>
        </VStack>

        <Box textAlign="center">
          <Text fontSize="lg" color="gray.600">
            Showing {filteredLeagues.length} of {allLeagues.length} leagues
            {(searchTerm || selectedSport) && (
              <Text
                as="span"
                fontWeight="semibold"
                color="blue.600"
              >
                {searchTerm && ` for "${searchTerm}"`}
                {selectedSport && ` in ${selectedSport}`}
              </Text>
            )}
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {filteredLeagues.map((league: League) => (
            <LeagueCard 
              key={league.idLeague} 
              league={league} 
              onClick={handleLeagueClick}
            />
          ))}
        </SimpleGrid>

        {filteredLeagues.length === 0 && searchTerm && (
          <Center py={20}>
            <VStack gap={4}>
              <Text
                fontSize="xl"
                fontWeight="semibold"
                color="gray.600"
              >
                No leagues found
              </Text>
              <Text color="gray.500">
                Try adjusting your search term or clear the search to see all
                leagues.
              </Text>
            </VStack>
          </Center>
        )}
      </VStack>
    </Box>
  );
};

export default LeaguesPage;
