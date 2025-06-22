import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { Toaster } from "@/components/Toaster"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider value={defaultSystem}>
        <App />
        <Toaster />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)