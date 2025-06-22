import { createFileRoute } from '@tanstack/react-router'
import LeagueDetailsPage from '@/pages/LeagueDetails'

export const Route = createFileRoute('/league/$leagueId')({
  component: LeagueDetailsPage,
}) 