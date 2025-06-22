import React from "react";
import { 
  Input, 
  Box 
} from "@chakra-ui/react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ 
  searchTerm, 
  onSearchChange, 
  placeholder = "Search leagues..." 
}: SearchBarProps) => {
  return (
    <Box maxW="md" mx="auto">
      <Input
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        bg="white"
        borderColor="gray.300"
        _focus={{
          borderColor: "blue.500",
          boxShadow: "0 0 0 1px #3182ce"
        }}
        _dark={{
          bg: "gray.700",
          borderColor: "gray.600",
          _focus: {
            borderColor: "blue.400",
            boxShadow: "0 0 0 1px #63b3ed"
          }
        }}
        size="lg"
      />
    </Box>
  );
};

export default SearchBar; 