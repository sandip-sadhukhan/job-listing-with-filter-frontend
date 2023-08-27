import {
  Button,
  ButtonGroup,
  Container,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";

const FilterBox = () => {
  return (
    <Container maxW="container.lg" position="absolute" top="-41px" left="0">
      <HStack
        py={4}
        px={8}
        bg="white"
        shadow="xl"
        borderRadius="md"
        gap={4}
        w="full"
      >
        <HStack
          w="full"
          flexWrap={{ base: "wrap", md: "nowrap" }}
          gap={{ base: 4, md: 2 }}
        >
          {["Frontend", "CSS", "JavaScript"].map((item) => (
            <ButtonGroup isAttached size="sm" key={item}>
              <Button
                bgColor="filterTabletsCyan.500"
                color="darkCyan.500"
                borderRadius="sm"
                cursor="auto"
                _hover={{
                  bgColor: "filterTabletsCyan.500",
                }}
              >
                {item}
              </Button>
              <IconButton
                bgColor="darkCyan.500"
                color="white"
                _hover={{
                  bgColor: "darkGrayishCyan.500",
                }}
                icon={<FaTimes />}
                aria-label="Delete filter"
                borderRadius="sm"
              />
            </ButtonGroup>
          ))}
        </HStack>

        <Button variant="link" _hover={{ color: "darkCyan.500" }}>
          Clear
        </Button>
      </HStack>
    </Container>
  );
};

export default FilterBox;
