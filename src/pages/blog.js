import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  Stack,
  Flex,
  Avatar,
  useColorModeValue,
  extendTheme,
} from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const Blog = ({ data }) => {
  console.log("data", data)
  const theme = extendTheme({
    colors: {
      bg: {
        100: "#0d1f2d",
        200: "#113C45",
      },
    },
  })
  return (
    <Layout>
      <Text color={"gray.500"}>Read our research articles and blogs</Text>
      <Seo title="Blog" />
      {data.allContentfulBlogPost.nodes.map(node => {
        return (
          <>
            <Flex
              key={node.id}
              py={6}
              justifyContent={"center"}
              width={"full"}
              flexDirection={"row"}
            >
              <Box
                maxW={"445px"}
                w={"full"}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                bg={"#113C45"}
                overflow={"hidden"}
              >
                <Box
                  h={"210px"}
                  bg={"bg.200"}
                  mt={-6}
                  mx={-6}
                  mb={6}
                  pos={"relative"}
                >
                  <Image
                    roundedTop="lg"
                    w="full"
                    h={64}
                    fit="cover"
                    src={node.heroImage.url}
                    alt={node.title}
                  />
                </Box>
                <Stack>
                  <Text
                    color={"green.500"}
                    textTransform={"uppercase"}
                    fontWeight={800}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    Blog
                  </Text>
                  <Heading fontSize={"2xl"} fontFamily={"body"}>
                    <Link to={`/blog/${node.slug}/`}> {node.title}</Link>
                  </Heading>
                  <Text
                    color={"blue.400"}
                    textTransform={"uppercase"}
                    fontWeight={500}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    {/* {renderRichText(node.description)} 
            {documentToPlainTextString(
      JSON.parse(node.description.raw))}   */}
                  </Text>
                </Stack>
                <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                  <Avatar
                    src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                    alt={"Author"}
                  />
                  <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                    <Text
                      color={"blue.400"}
                      textTransform={"uppercase"}
                      fontWeight={500}
                      fontSize={"sm"}
                      letterSpacing={1.1}
                    >
                      {node.author.name}
                    </Text>
                    <Text
                      color={"purple.500"}
                    >{`${node.publishDate}  · 6min read `}</Text>
                  </Stack>
                </Stack>
              </Box>
            </Flex>
          </>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allContentfulBlogPost {
      nodes {
        title
        slug
        publishDate
        author {
          name
        }
        id
        heroImage {
          url
        }
        createdAt(formatString: "DD-MM-YY")
        description {
          raw
        }
      }
    }
  }
`

export default Blog
