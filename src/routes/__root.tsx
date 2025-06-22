import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Box } from '@chakra-ui/react'
import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => {
    const bg = 'gray.50'
    
    return (
      <Box minH="100vh" bg={bg}>
        <Header />
        <Outlet />
      </Box>
    )
  },
}) 