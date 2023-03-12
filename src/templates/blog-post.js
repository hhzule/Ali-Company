import React from 'react';
import Layout from '../components/layout';
import {Link, graphql } from 'gatsby';
import Seo from "../components/seo"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  Flex,
  Box,
  Heading,
  Image,
  chakra
} from '@chakra-ui/react';

const BlogPost = ({data, location}) => {
    console.log("first", data.allContentfulBlogPost.nodes[0])
     const post = data.allContentfulBlogPost.nodes[0]
    //  const plainTextDescription = documentToPlainTextString(
    //   JSON.parse(post.description.raw)
    // )
 
     // console.log("location", location)
    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          console.log("node", node)

          const { gatsbyImage, description } = node.data.target
          return ( 
            <GatsbyImage
              image={getImage(gatsbyImage)}
              alt={description}
            />
          )
        },
      },
    };
const run = () =>{
  console.log("ran from button")
}

    const PagButton = (props) => {
      const activeStyle = {
        bg: "brand.600",
        _dark: {
          bg: "brand.500",
        },
        color: "white",
      };
      return (
        <chakra.button
          mx={1}
          px={4}
          py={2}
          onClick={props.function}
          rounded="md"
          bg="white"
          color="gray.700"
          _dark={{
            color: "white",
            bg: "gray.800",
          }}
          opacity={props.disabled && 0.6}
          _hover={!props.disabled && activeStyle}
          cursor={props.disabled && "not-allowed"}
          {...(props.active && activeStyle)}
        >
          {props.children}
        </chakra.button>
      );
    };

    return (
    <Layout>
            <Seo
        title={post.title}
        // description={plainTextDescription}
        image={`http:${post.heroImage.url}`}
      />
      <chakra.span
            mx={1}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.300",
            }}
          >
            {post.title}
          </chakra.span>
      <Flex
  bg="#edf3f8"
  _dark={{
    bg: "#3e3e3e",
  }}
  p={50}
  w="full"
  alignItems="center"
  justifyContent="center"
>

  <Box
    mx="auto"
    rounded="lg"
    shadow="md"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    maxW="2xl"
  >
    <Image roundedTop="lg" w="full" h={64} fit="cover" src={post.heroImage.url} alt={post.title}/> 
    <Box p={6}>
      <Box>

        <chakra.p
          mt={2}
          fontSize="sm"
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
        >
  {post.body?.raw && renderRichText(post.body, options)}
 
        </chakra.p>
      </Box>

      <Box mt={4}>
        <Flex alignItems="center">
          <Flex alignItems="center">
          <chakra.span
            mx={1}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.300",
            }}
          >Author:
            {post.author.name}
          </chakra.span>
          </Flex>
          <chakra.span
            mx={1}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.300",
            }}
          > {post.createdAt}

          </chakra.span>
          <chakra.span
            mx={1}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.300",
            }}
          > 
            Published
            {post.publishDate}
          </chakra.span>
        </Flex>

      </Box>

    </Box>
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex>
        <PagButton disabled function={run}>previous</PagButton>
        <PagButton active function={run}>Next</PagButton>
      </Flex>
    </Flex>
  </Box>
  
</Flex>;
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
query ($slug: String!) {
    allContentfulBlogPost(filter: {slug: {eq: $slug }}) {
      nodes {
        title
        slug
        publishDate(fromNow: true)
        author {
          name
        }
        createdAt(formatString: "DD-MM-YY")
        description {
          raw
        }
        body {
          raw
        }
        tags
        heroImage {
          url
        }
      }
    }
  }
`
