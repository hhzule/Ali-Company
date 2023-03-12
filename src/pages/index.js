import React from "react"
import Layout from "../components/layout"
import Services from "../components/services"
import Seo from "../components/seo"
import { Flex, Text } from "@chakra-ui/react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Index = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <Text color={"gray.500"}>
        We research blockchain core and infrastructure while developing products
        for the Web3 ecosystem in addition to helping companies launch and
        secure their blockchain products.
      </Text>

      <Text fontSize={"3xl"} color={"green.500"}>
        Services
      </Text>
      <Text color={"gray.500"}>
        Providing Consultation and Development Services in Web3
      </Text>
      {data.allContentfulServices.nodes.map(content => {
        return (
          <div key={content.id}>
            <Services content={content}></Services>
          </div>
        )
      })}
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query MyQuery {
    allContentfulServices {
      nodes {
        image {
          url
        }
        title
        id
        description {
          description
        }
      }
    }
  }
`

export const Head = () => <Seo title="Home" />
