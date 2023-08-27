import { Box, useBreakpointValue } from "@chakra-ui/react";

const UpperBgSection = () => {
  const headerImageURL = useBreakpointValue({
    base: "bg-header-mobile.svg",
    md: "bg-header-desktop.svg",
  });

  return (
    <Box
      as="section"
      bgImage={`url('/images/${headerImageURL}')`}
      bgColor="darkCyan.500"
      w="full"
      h="36"
      bgPosition="center"
    ></Box>
  );
};

export default UpperBgSection;
