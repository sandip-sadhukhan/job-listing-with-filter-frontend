import Head from "next/head";
import { Container, VStack } from "@chakra-ui/react";
import FilterBox from "@/components/filter-box";
import JobCard from "@/components/job-card";
import UpperBgSection from "@/components/upper-bg-section";

export default function Home() {
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
        <Container maxW="container.lg" position="relative">
          {/* Filter Box */}
          <FilterBox />

          {/* Job Lists */}
          <VStack as="section" my={14} mb={10} w="full" gap={6}>
            {[1, 2, 3, 4].map((item) => (
              <JobCard key={item} />
            ))}
          </VStack>
        </Container>
      </VStack>
    </>
  );
}
