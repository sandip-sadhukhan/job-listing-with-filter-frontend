import { Box } from "@chakra-ui/react";

const UpperBgSection = () => {
  return (
    <Box
      as="section"
      bgImage="url('/images/bg-header-desktop.svg')"
      bgColor="darkCyan.500"
      w="full"
      h="36"
      bgPosition="center"
    ></Box>
  );
};

export default UpperBgSection;
