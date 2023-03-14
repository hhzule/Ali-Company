import React from "react"
import { Box, Flex, Image, chakra, extendTheme } from "@chakra-ui/react"

const Services = ({ content }) => {
  const theme = extendTheme({
    colors: {
      bg: {
        100: "#0d1f2d",
      },
    },
  })
  console.log("services", content)
  return (
    <>
      <Flex
        // bg="#edf3f8"
        // _dark={{
        //   bg: "#3e3e3e",
        // }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="full"
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
              src={content.image.url}
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
            {content.title}
          </chakra.h2>

          <chakra.p
            mt={2}
            color="gray.600"
            _dark={{
              color: "gray.200",
            }}
          >
            {content.description.description}{" "}
          </chakra.p>

          <Flex justifyContent="end" mt={4}></Flex>
        </Box>
      </Flex>
    </>
  )
}

export default Services
