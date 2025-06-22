import { createFileRoute } from '@tanstack/react-router'
import { Container, Heading } from '@chakra-ui/react'
import LeaguesPage from '../pages/Leagues'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <Container maxW="6xl" py={10}>
      <Heading mb={8} textAlign="center">
        Sports Leagues
      </Heading>
      <LeaguesPage />
    </Container>
  )
} 