import React from "react";
import { 
  Box,
  Text,
  Portal,
  Select,
  createListCollection
} from "@chakra-ui/react";

interface DropdownFilterProps {
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  size?: "xs" | "sm" | "md" | "lg";
  width?: string;
}

const DropdownFilter = ({ 
  label,
  placeholder,
  options,
  value,
  onChange,
  size = "sm",
  width = "250px"
}: DropdownFilterProps) => {
  const optionsCollection = React.useMemo(() => createListCollection({
    items: options.map((option: string) => ({ label: option, value: option }))
  }), [options]);

  return (
    <Box>
      <Text fontSize="sm" fontWeight="medium" color="gray.700" _dark={{ color: "gray.300" }} mb={2}>
        {label}
      </Text>
      <Select.Root 
        collection={optionsCollection} 
        size={size} 
        width={width}
        value={value ? [value] : []}
        onValueChange={(details) => onChange(details.value[0] || "")}
      >
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder={placeholder} />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {optionsCollection.items.map((option) => (
                <Select.Item item={option} key={option.value}>
                  {option.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </Box>
  );
};

export default DropdownFilter; 