import React from "react"
import Layout from "../components/layout"
import {
  Box,
  Text,
  SimpleGrid,
  GridItem,
  Heading,
  chakra,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Select,
  Link as ChL,
  Button,
  Stack,
} from "@chakra-ui/react"
import TeamCard from "../components/teamCards"
import { useStaticQuery, graphql, Link } from "gatsby"

const Contact = ({ data }) => {
  return (
    <>
      <Layout>
        {data.allContentfulPerson.nodes.map(node => {
          return (
            <>
              <TeamCard key={node.id} content={node}></TeamCard>
            </>
          )
        })}
        <Heading
          fontWeight={500}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"100%"}
        >
          <Text as={"span"} color={"green.400"}>
            Contact Us
          </Text>
          <br />
          <Text
            fontWeight={100}
            fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
            lineHeight={"100%"}
          >
            Have any questions? We’re here to help.
          </Text>
        </Heading>
        Book a call or fill out the form and get all queries answered relating
        to your Web3 development needs or discuss potential collaboration and
        partnership opportunities with us.
        <Box bg="bg.100" p={10} id={"form"}>
          <Box mt={[10, 0]}>
            <SimpleGrid
              display={{
                base: "initial",
                md: "grid",
              }}
            >
              <GridItem
                mt={[5, null, 0]}
                colSpan={{
                  md: 2,
                }}
              >
                <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                  Connect with us by filling the form
                </Heading>
                <chakra.form
                  method="POST"
                  shadow="base"
                  rounded={[null, "md"]}
                  overflow={{
                    sm: "hidden",
                  }}
                  name="Contact Form"
                  data-netlify="true"
                  action="/thank-you"
                >
                  <Stack px={4} py={5} p={[null, 6]} bg="gray.50" spacing={6}>
                    <input
                      type="hidden"
                      name="form-name"
                      value="Contact Form"
                    />
                    <SimpleGrid columns={6} spacing={6}>
                      <FormControl as={GridItem} colSpan={[6, 3]}>
                        <FormLabel
                          htmlFor="first_name"
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50",
                          }}
                        >
                          Welcome! What should we call you?*
                        </FormLabel>
                        <Input
                          type="text"
                          name="first_name"
                          id="first_name"
                          autoComplete="given-name"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 4]}>
                        <FormLabel
                          htmlFor="email_address"
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50",
                          }}
                        >
                          Would you let us know your email address?*
                        </FormLabel>
                        <Input
                          type="text"
                          name="email_address"
                          id="email_address"
                          autoComplete="email"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                        />
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 4]}>
                        <FormLabel
                          htmlFor="email_address"
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50",
                          }}
                        >
                          Message
                        </FormLabel>
                        <Textarea
                          placeholder="your message"
                          mt={1}
                          rows={3}
                          shadow="sm"
                          focusBorderColor="brand.400"
                          fontSize={{
                            sm: "sm",
                          }}
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 3]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50",
                          }}
                        >
                          Country / Region
                        </FormLabel>
                        <Select
                          id="country"
                          name="country"
                          autoComplete="country"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                          <option>Others</option>
                        </Select>
                      </FormControl>
                    </SimpleGrid>
                  </Stack>
                  <Box
                    px={{
                      base: 4,
                      sm: 6,
                    }}
                    py={3}
                    bg="gray.50"
                    textAlign="right"
                  >
                    <Button
                      type="submit"
                      colorScheme="brand"
                      color="gray.800"
                      _focus={{
                        shadow: "",
                      }}
                      fontWeight="semibold"
                    >
                      Save
                    </Button>
                  </Box>
                </chakra.form>
              </GridItem>
            </SimpleGrid>
          </Box>
        </Box>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allContentfulPerson {
      nodes {
        email
        github
        company
        image {
          url
          title
        }
        phone
        shortBio {
          raw
        }
        title
        id
        name
      }
    }
  }
`

export default Contact
