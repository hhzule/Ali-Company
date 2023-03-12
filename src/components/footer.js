import React from "react"
import {
  Box,
  Flex,
  Image,
  HStack,
  Divider,
  VStack,
  Icon,
  FaFacebookF,
  FiTwitter,
  GrInstagram,
  FaLinkedinIn,
  Stack,
  Text,
  // Link,
  NavLink,
} from "@chakra-ui/react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Logo from "../assets/logo.jpg"

const Footer = () => {
  return (
    <footer>
      {/* <Box
        bg={useColorModeValue('bg.100', 'gray.900')}
        color={useColorModeValue('white.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/about">About</Link>
          </Stack>
          <Text>
          Site developed by Ali R&D Team &copy;{' '}
          {new Date().getFullYear().toString()}{' '}
     
          </Text>
        </Container>
      </Box> */}
      <Box>
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          w="full"
          justify="space-between"
          p={10}
        >
          <Flex justify="center">
            <Image
              src={Logo}
              alt="Company Logo"
              rounded="lg"
              width={{
                base: "60px",
                lg: "100px",
              }}
              height={{
                base: "75px",
                lg: "80px",
              }}
              my={{
                base: 2,
                lg: 0,
              }}
            />
          </Flex>
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{
              base: "12px",
              md: "16px",
            }}
            color="white"
            textAlign={{
              base: "center",
              md: "left",
            }}
          >
            {/* <Flex justify="start" direction="column">
        <Link textTransform="uppercase">Pre-Sale FAQS</Link>
        <Link textTransform="uppercase">Submit a ticket</Link>
      </Flex>
      <Flex justify="start" direction="column">
        <Link textTransform="uppercase">Services</Link>
        <Link textTransform="uppercase">Theme Tweak</Link>
      </Flex> */}
          </HStack>
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{
              base: "12px",
              md: "14px",
            }}
            color="green.500"
            textAlign={{
              base: "center",
              md: "left",
            }}
          >
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">Product</Link>
              <Link textTransform="uppercase">Services</Link>
              <Link textTransform="uppercase">Research</Link>
            </Flex>
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">About Us</Link>

              <Link textTransform="uppercase" to="/about#form">
                Contact Us
              </Link>

              <Link textTransform="uppercase">Resources</Link>
            </Flex>
          </HStack>
        </Stack>
        <Divider w="95%" mx="auto" color="white" h="3.5px" />
        <VStack py={3}>
          {/* <HStack justify="center">
      <Link>
        <Icon
      color="white"
          h="20px"
          w="20px"
          as={FaFacebookF}
        />
      </Link>
      <Link>
        <Icon
      color="white"
          h="20px"
          w="20px"
          as={FiTwitter}
        />
      </Link>
      <Link>
        <Icon
    color="white"
          h="20px"
          w="20px"
          as={GrInstagram}
        />
      </Link>
      <Link>
        <Icon
      color="white"
          h="20px"
          w="20px"
          as={FaLinkedinIn}
        />
      </Link>
    </HStack> */}

          <Text textAlign="center" fontSize="smaller" color="white">
            &copy;Copyright. All rights reserved.
          </Text>
        </VStack>
      </Box>
    </footer>
  )
}

export default Footer
