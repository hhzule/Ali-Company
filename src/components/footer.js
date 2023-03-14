import React from "react"
import {
  Box,
  Flex,
  Image,
  HStack,
  Divider,
  VStack,
  Stack,
  Text,
} from "@chakra-ui/react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Logo from "../assets/logo.jpg"

const Footer = () => {
  return (
    <footer>
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
          ></HStack>
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
              <Link textTransform="uppercase" to="/product">
                Product
              </Link>
              <Link textTransform="uppercase" to="/">
                Services
              </Link>
              <Link textTransform="uppercase" to="/research">
                Research
              </Link>
            </Flex>
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase" to="/about">
                About Us
              </Link>

              <Link textTransform="uppercase" to="/about#form">
                Contact Us
              </Link>

              <Link textTransform="uppercase" to="/blog">
                Resources
              </Link>
            </Flex>
          </HStack>
        </Stack>
        <Divider w="95%" mx="auto" color="white" h="3.5px" />
        <VStack py={3}>
          <Text textAlign="center" fontSize="smaller" color="white">
            &copy;Copyright. All rights reserved.
          </Text>
        </VStack>
      </Box>
    </footer>
  )
}

export default Footer
