import {
  Avatar,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";

const JobCard = () => {
  return (
    <Card shadow="xl" w="full">
      <CardBody
        borderLeft="5px solid"
        borderLeftColor="darkCyan.500"
        px={8}
        py={7}
        borderRadius="md"
      >
        <HStack justifyContent="space-between">
          {/* Photo & Info */}
          <HStack gap={6}>
            <Avatar src="/images/photosnap.svg" size="xl" />

            <VStack align="start">
              <HStack>
                <Heading
                  as="h3"
                  size="md"
                  fontSize="lg"
                  color="darkCyan.500"
                  mr={1}
                >
                  Photosnap
                </Heading>
                <Tag bgColor="darkCyan.500" color="white" borderRadius="full">
                  <Text mt={1}>NEW!</Text>
                </Tag>
                <Tag
                  bgColor="darkGrayishCyan.500"
                  color="white"
                  borderRadius="full"
                >
                  <Text mt={1}>FEATURED</Text>
                </Tag>
              </HStack>
              <Heading
                as="h2"
                size="md"
                fontSize="xl"
                color="darkCyan.500"
                cursor="pointer"
              >
                Senior Frontend Developer
              </Heading>
              <HStack divider={<Text>•</Text>} gap={3} color="grayishCyan.500">
                <Text>1d ago</Text>
                <Text>Full Time</Text>
                <Text>USA only</Text>
              </HStack>
            </VStack>
          </HStack>

          {/* Role, level & languages */}
          <HStack>
            {["Frontend", "Senior", "HTML", "CSS", "JavaScript"].map((item) => (
              <Button
                key={item}
                bgColor="filterTabletsCyan.500"
                color="darkCyan.500"
                _hover={{
                  bgColor: "darkCyan.500",
                  color: "white",
                }}
              >
                {item}
              </Button>
            ))}
          </HStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default JobCard;
