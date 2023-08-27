import Head from "next/head";
import { Container, VStack } from "@chakra-ui/react";
import FilterBox from "@/components/filter-box";
import JobCard from "@/components/job-card";
import UpperBgSection from "@/components/upper-bg-section";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { calculateFilteredJobs } from "@/redux/slices/jobSlice";

export default function Home() {
  const { filteredJobs, filteredKeywords } = useSelector(
    (state: RootState) => state.jobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateFilteredJobs());
  }, [filteredKeywords, dispatch]);

  return (
    <>
      <Head>
        <title>Job Listing with Filter | Made by Sandip Sadhukhan</title>
        <meta
          name="description"
          content="Job Listing filter. Created with nextjs and Chakra UI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <VStack as="main" bgColor="backgroundCyan.500" minH="100vh" w="full">
        {/* Upper Background */}
        <UpperBgSection />

        {/* Lower Section */}
        <Container maxW="container.lg">
          {/* Filter Box */}
          <FilterBox />

          {/* Job Lists */}
          <VStack
            as="section"
            mt={{ base: 16, md: 14 }}
            mb={10}
            w="full"
            gap={{ base: 12, md: 6 }}
          >
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </VStack>
        </Container>
      </VStack>
    </>
  );
}
