import React from 'react'
import { useParams, Link } from '@tanstack/react-router'
import {
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Badge,
  Spinner,
  Center,
  Box,
  Button,
  SimpleGrid,
  Image,
} from '@chakra-ui/react'
import { useLeagues, type League } from '@/hooks/useLeagues'
import { useSeasons, type Season } from '@/hooks/useSeasons'
import { toaster } from '@/components/Toaster'

const LeagueDetailsPage = () => {
  const { leagueId } = useParams({ from: '/league/$leagueId' })
  
  const { data: leaguesData, isLoading: leaguesLoading, error: leaguesError } = useLeagues()
  const { data: seasonsData, isLoading: seasonsLoading, error: seasonsError } = useSeasons(leagueId)

  const cardBg = 'white'
  const borderColor = 'gray.200'

  React.useEffect(() => {
    if (leaguesError) {
      toaster.create({
        title: 'Error loading league details',
        description: leaguesError.message,
        type: 'error',
        duration: 5000,
        closable: true,
      })
    }
    if (seasonsError) {
      toaster.create({
        title: 'Error loading seasons',
        description: seasonsError.message,
        type: 'error',
        duration: 5000,
        closable: true,
      })
    }
  }, [leaguesError, seasonsError])

  if (leaguesLoading) {
    return (
      <Container maxW="6xl" py={10}>
        <Center py={20}>
          <VStack gap={4}>
            <Spinner size="xl" color="blue.500" />
            <Text color="gray.600">
              Loading league details...
            </Text>
          </VStack>
        </Center>
      </Container>
    )
  }

  const allLeagues = leaguesData?.leagues || []
  const league: League | undefined = allLeagues.find((l: League) => l.idLeague === leagueId)

  if (!league) {
    return (
      <Container maxW="4xl" py={10}>
        <Center py={20}>
          <VStack gap={4}>
            <Heading size="lg" color="red.500">
              League Not Found
            </Heading>
            <Text color="gray.600">
              The league with ID "{leagueId}" could not be found.
            </Text>
            <Link to="/">
              <Button colorScheme="blue">
                Back to Leagues
              </Button>
            </Link>
          </VStack>
        </Center>
      </Container>
    )
  }

  const seasons = seasonsData?.seasons || []

  return (
    <Container maxW="6xl" py={10}>
      <VStack gap={8} align="stretch">
        {/* League Header */}
        <VStack gap={4} align="start">
          <HStack justify="space-between" width="100%">
            <VStack align="start" gap={2}>
              <Heading size="xl" color="blue.600">
                {league.strLeague}
              </Heading>
              <HStack gap={4}>
                <Badge colorScheme="green" variant="solid" fontSize="md" px={3} py={1}>
                  {league.strSport}
                </Badge>
                                 {league.strLeagueAlternate && (
                  <Text fontSize="sm" color="gray.600">
                    Also known as: {league.strLeagueAlternate}
                  </Text>
                 )}
              </HStack>
            </VStack>
            <Link to="/">
              <Button variant="outline">
                Back to Leagues
              </Button>
            </Link>
          </HStack>
        </VStack>

        {/* Seasons Section */}
        <Box>
          <Heading size="lg" mb={6} color="gray.800">
            Seasons
          </Heading>

          {seasonsLoading && (
            <Center py={10}>
              <VStack gap={4}>
                <Spinner size="lg" color="blue.500" />
                <Text color="gray.600">
                  Loading seasons...
                </Text>
              </VStack>
            </Center>
          )}

          {seasonsError && (
            <Center py={10}>
              <VStack gap={4}>
                <Text color="red.500" fontSize="lg" fontWeight="medium">
                  Failed to load seasons
                </Text>
                <Text color="gray.600">
                  {seasonsError.message}
                </Text>
              </VStack>
            </Center>
          )}

          {!seasonsLoading && !seasonsError && seasons.length === 0 && (
            <Center py={10}>
              <VStack gap={4}>
                <Text fontSize="lg" color="gray.600">
                  No seasons found
                </Text>
                <Text fontSize="sm" color="gray.500">
                  This league doesn't have any season data available.
                </Text>
              </VStack>
            </Center>
          )}

          {!seasonsLoading && !seasonsError && seasons.length > 0 && (
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
              {seasons.map((season: Season, index: number) => (
                <Box
                  key={`${season.strSeason}-${index}`}
                  bg={cardBg}
                  p={6}
                  rounded="lg"
                  shadow="md"
                  borderWidth="1px"
                  borderColor={borderColor}
                  _hover={{ 
                    transform: "translateY(-2px)", 
                    shadow: "lg",
                    borderColor: "blue.300"
                  }}
                  transition="all 0.2s"
                >
                  <VStack gap={4} align="center">
                    <Text 
                      fontSize="lg" 
                      fontWeight="bold" 
                      color="blue.600"
                    >
                      {season.strSeason}
                    </Text>
                    
                    {season.strBadge ? (
                      <Box
                        borderRadius="md"
                        overflow="hidden"
                        bg="white"
                        p={3}
                        shadow="sm"
                      >
                        <Image
                          src={season.strBadge}
                          alt={`${league.strLeague} ${season.strSeason} badge`}
                          maxW="80px"
                          maxH="80px"
                          objectFit="contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </Box>
                    ) : (
                      <Box
                        w="80px"
                        h="80px"
                        bg="gray.100"
                        borderRadius="md"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Text fontSize="xs" color="gray.500">
                          No Badge
                        </Text>
                      </Box>
                    )}
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          )}
        </Box>
      </VStack>
    </Container>
  )
}

export default LeagueDetailsPage 