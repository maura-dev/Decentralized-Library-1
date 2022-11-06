import Head from 'next/head'
// import Preloader from '../components/Preloader/preloader'
import { Box, Flex, Tag } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'
import FeatureCard from '../components/Home/FeatureCard'
import { MdOutlineEnhancedEncryption } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import { BiPurchaseTag } from 'react-icons/bi'
import { SiSimpleanalytics } from 'react-icons/si'
import GoalCard from '../components/Home/GoalCard'
import Avatar1 from '../components/svg/Avatar1'
import Avatar2 from '../components/svg/Avatar2'
// import ConnectWalletButton from '../components/ConnectWalletButton'
import Navbar from '../components/Navbar/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title> Delibra </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Navbar />
      <Box>
        {/* Hero section */}
        <Box
          bg="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%)"
          width="100vw"
          height="100vh"
          mb={10}
        ></Box>

        {/* Our features section */}

        <Box bg="#ffffff" width="100vw" minH="50vh" px="100px" py={10} mb={10}>
          <Text
            bgGradient="linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)"
            bgClip="text"
            fontSize="20px"
            fontWeight="500"
            mb={5}
          >
            Our Features
          </Text>
          <Heading
            fontFamily="'Clash Grotesk', sans-serif"
            fontSize="56px"
            fontWeight="700"
            mb={5}
          >
            Lorem ipsum dolor sit amet
          </Heading>
          <Text
            fontFamily="'Inter', sans-serif"
            fontSize="20px"
            fontWeight="400"
            mb={5}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum
            augue mi vestibulum tempor.{' '}
          </Text>

          <Flex justify="space-between" my={10}>
            <FeatureCard
              icon={<MdOutlineEnhancedEncryption />}
              title="Book encryption"
              cont="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum augue mi vestibulum tempor. "
            />

            <FeatureCard
              icon={<GiReceiveMoney />}
              title="Read to earn"
              cont="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum augue mi vestibulum tempor. "
            />

            <FeatureCard
              icon={<BiPurchaseTag />}
              title="Ease of purchase"
              cont="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum augue mi vestibulum tempor. "
            />

            <FeatureCard
              icon={<SiSimpleanalytics />}
              title="Book Analytics"
              cont="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum augue mi vestibulum tempor. "
            />
          </Flex>
        </Box>

        {/* Goals section */}
        <Box py={10} px="100px" minH="50vh" textAlign="center">
          <Tag
            color="#EAA391"
            bg="#FFEBE1"
            borderRadius="86px"
            fontSize="16px"
            fontWeight="700"
            px={4}
            py={2}
            mb={5}
          >
            OUR GOAL IS SIMPLE
          </Tag>
          <Heading
            fontFamily="'Clash Grotesk', sans-serif"
            fontSize="56px"
            fontWeight="700"
            mb={5}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum
            augue mi vestibulum tempor.
          </Heading>
          <Flex justify="space-between" mt={10}>
            <GoalCard
              title="For Authors"
              cont="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum augue mi vestibulum tempor. Mauris suspendisse."
            >
              <Avatar1 />
            </GoalCard>
            <GoalCard
              title="For Readers"
              cont="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum augue mi vestibulum tempor. Mauris suspendisse."
            >
              <Avatar2 />
            </GoalCard>
          </Flex>
        </Box>
        {/* <Preloader /> */}
      </Box>
    </>
  )
}
