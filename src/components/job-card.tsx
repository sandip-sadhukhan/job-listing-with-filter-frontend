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
  return (
    <Card shadow="xl" w="full">
      <CardBody
        borderLeft={job.featured ? "5px solid" : "none"}
        borderLeftColor={job.featured ? "darkCyan.500" : "none"}
        px={8}
        py={7}
        borderRadius="md"
      >
        <HStack justifyContent="space-between">
          {/* Photo & Info */}
          <HStack gap={6}>
            <Avatar src={job.logo} size="xl" />

            <VStack align="start">
              <HStack>
                <Heading
                  as="h3"
                  size="md"
                  fontSize="lg"
                  color="darkCyan.500"
                  mr={1}
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
                fontSize="xl"
                color="darkCyan.500"
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

          {/* Role, level & languages */}
          <HStack justifyContent="start" alignItems="center" gap={3}>
            {[job.role, job.level, ...job.languages, ...job.tools].map(
              (item) => (
                <VStack w="full">
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
                </VStack>
              )
            )}
          </HStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default JobCard;
