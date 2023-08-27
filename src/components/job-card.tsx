import {
  Avatar,
  Button,
  Card,
  CardBody,
  Divider,
  HStack,
  Heading,
  Tag,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const JobCard = ({ job }: { job: Job }) => {
  var isMobileDevice = useBreakpointValue({ base: true, md: false });
  return (
    <Card shadow="xl" w="full">
      <CardBody
        borderLeft={job.featured ? "5px solid" : "none"}
        borderLeftColor={job.featured ? "darkCyan.500" : "none"}
        px={{ base: 5, md: 8 }}
        py={{ base: 5, md: 7 }}
        borderRadius="md"
      >
        <HStack
          justifyContent="space-between"
          flexDir={{ base: "column", md: "row" }}
        >
          {/* Photo & Info */}
          <HStack
            gap={{ base: 2, md: 6 }}
            flexDir={{ base: "column", md: "row" }}
            align={{ base: "start", md: "center" }}
            w={{ base: "full", md: "auto" }}
          >
            <Avatar
              src={job.logo}
              size={{ base: "lg", md: "xl" }}
              mt={{ base: -12, md: 0 }}
            />

            <VStack align="start" gap={{ base: 3, md: 2 }}>
              <HStack>
                <Heading
                  as="h3"
                  size="md"
                  fontSize="lg"
                  color="darkCyan.500"
                  mr={{ base: 3, md: 1 }}
                >
                  {job.company}
                </Heading>
                <Tag
                  bgColor="darkCyan.500"
                  color="white"
                  borderRadius="full"
                  hidden={!job.new}
                >
                  <Text mt={1}>NEW!</Text>
                </Tag>
                <Tag
                  bgColor="darkGrayishCyan.500"
                  color="white"
                  borderRadius="full"
                  hidden={!job.featured}
                >
                  <Text mt={1}>FEATURED</Text>
                </Tag>
              </HStack>
              <Heading
                as="h2"
                size="md"
                fontSize={{ base: "lg", md: "xl" }}
                color={{ base: "darkGrayishCyan.500", md: "darkCyan.500" }}
                cursor="pointer"
              >
                {job.position}
              </Heading>
              <HStack divider={<Text>•</Text>} gap={3} color="grayishCyan.500">
                <Text>{job.postedAt}</Text>
                <Text>{job.contract}</Text>
                <Text>{job.location}</Text>
              </HStack>
            </VStack>
          </HStack>

          <Divider
            hidden={!isMobileDevice}
            borderColor="blackAlpha.500"
            mt={2}
            mb={3}
          />

          {/* Role, level & languages */}
          <HStack
            justifyContent="start"
            alignItems="center"
            gap={3}
            flexWrap={{ base: "wrap", md: "nowrap" }}
          >
            {[job.role, job.level, ...job.languages, ...job.tools].map(
              (item) => (
                <Button
                  size="sm"
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
              )
            )}
          </HStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default JobCard;
