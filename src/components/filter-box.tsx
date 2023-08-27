import {
  Button,
  ButtonGroup,
  Container,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { clearFilter, removeFilter } from "@/redux/slices/jobSlice";

const FilterBox = () => {
  const filteredKeywords = useSelector(
    (state: RootState) => state.jobs.filteredKeywords
  );

  const dispatch = useDispatch();

  return (
    <Container
      maxW="container.lg"
      position="absolute"
      top="-41px"
      left="0"
      hidden={filteredKeywords.length === 0}
      zIndex={10}
    >
      <HStack
        py={4}
        px={8}
        bg="white"
        shadow="xl"
        borderRadius="md"
        gap={4}
        w="full"
      >
        <HStack w="full" flexWrap="wrap" gap={{ base: 4, md: 2 }}>
          {filteredKeywords.map((item) => (
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
                onClick={() => dispatch(removeFilter(item))}
              />
            </ButtonGroup>
          ))}
        </HStack>

        <Button
          variant="link"
          _hover={{ color: "darkCyan.500" }}
          onClick={() => dispatch(clearFilter())}
        >
          Clear
        </Button>
      </HStack>
    </Container>
  );
};

export default FilterBox;
