import React from "react"
import {
  Box,
  Flex,
  Image,
  chakra,
  Link as ChakraLink,
  extendTheme,
  Text,
} from "@chakra-ui/react"
import { useStaticQuery, graphql, Link } from "gatsby"
import gicon from "./../assets/github.png"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"

const TeamCard = content => {
  const theme = extendTheme({
    colors: {
      bg: {
        100: "#0d1f2d",
      },
    },
  })
  console.log("content,", content.content)
  return (
    <>
      <Flex
        bg="bg.100"
        _dark={{
          bg: "bg.100",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="md"
          mx="auto"
          py={4}
          px={8}
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          shadow="lg"
          rounded="lg"
        >
          <Flex
            justifyContent={{
              base: "center",
              md: "end",
            }}
            mt={-16}
          >
            <Image
              w={20}
              h={20}
              fit="cover"
              rounded="full"
              borderStyle="solid"
              borderWidth={2}
              color="brand.500"
              _dark={{
                color: "brand.400",
              }}
              alt="Testimonial avatar"
              src={content.content.image.url}
              // src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
            />
          </Flex>

          <chakra.h2
            color="gray.800"
            _dark={{
              color: "white",
            }}
            fontSize={{
              base: "2xl",
              md: "3xl",
            }}
            mt={{
              base: 2,
              md: 0,
            }}
            fontWeight="bold"
          >
            {content.content.title}
          </chakra.h2>

          <chakra.p
            mt={2}
            color="gray.600"
            _dark={{
              color: "gray.200",
            }}
          >
            {documentToPlainTextString(
              JSON.parse(content.content.shortBio.raw)
            )}
          </chakra.p>

          <Flex justifyContent="space-between" mt={4}>
            <Link to={`https://github.com/${content.content.github}`}>
              <img src={gicon} width="25px" alt="" />
              <Text fontSize="xl" color="black">
                {content.content.email}
              </Text>
            </Link>
            <Text fontSize="xl" color="black">
              {content.content.name}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

export default TeamCard
