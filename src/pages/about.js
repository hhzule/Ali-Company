import React from "react"
import ReCAPTCHA from "react-google-recaptcha"
import Layout from "../components/layout"
import {
  Box,
  Flex,
  Text,
  Avatar,
  SimpleGrid,
  GridItem,
  Heading,
  chakra,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Textarea,
  Icon,
  Divider,
  Input,
  Radio,
  RadioGroup,
  Select,
  Checkbox,
  VisuallyHidden,
  FaUser,
  FormHelperText,
  Link as ChL,
  Button,
  Stack,
} from "@chakra-ui/react"
import TeamCard from "../components/teamCard"
import { useStaticQuery, graphql, Link } from "gatsby"
import ContactFormPage from "../components/contact"

const Contact = ({ data }) => {
  // console.log("data", data)
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
        <Box bg="bg.100" p={10}>
          <Box mt={[10, 0]}>
            <SimpleGrid
              display={{
                base: "initial",
                md: "grid",
              }}
              columns={{
                md: 3,
              }}
              spacing={{
                md: 6,
              }}
            >
              <GridItem
                colSpan={{
                  md: 1,
                }}
              >
                <Box px={[4, 0]}>
                  <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                    Personal Information
                  </Heading>
                  <Text mt={1} fontSize="sm" color="white">
                    Use a permanent address where you can receive mail.
                  </Text>
                </Box>
              </GridItem>
              <GridItem
                mt={[5, null, 0]}
                colSpan={{
                  md: 2,
                }}
              >
                <chakra.form
                  method="POST"
                  shadow="base"
                  rounded={[null, "md"]}
                  overflow={{
                    sm: "hidden",
                  }}
                >
                  <Stack
                    px={4}
                    py={5}
                    p={[null, 6]}
                    bg="white"
                    _dark={{
                      bg: "#141517",
                    }}
                    spacing={6}
                  >
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
                          First name
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

                      <FormControl as={GridItem} colSpan={[6, 3]}>
                        <FormLabel
                          htmlFor="last_name"
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50",
                          }}
                        >
                          Last name
                        </FormLabel>
                        <Input
                          type="text"
                          name="last_name"
                          id="last_name"
                          autoComplete="family-name"
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
                          Email address
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
                        </Select>
                      </FormControl>

                      <FormControl as={GridItem} colSpan={6}>
                        <FormLabel
                          htmlFor="street_address"
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50",
                          }}
                        >
                          Street address
                        </FormLabel>
                        <Input
                          type="text"
                          name="street_address"
                          id="street_address"
                          autoComplete="street-address"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                        <FormLabel
                          htmlFor="city"
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50",
                          }}
                        >
                          City
                        </FormLabel>
                        <Input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="city"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="state"
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50",
                          }}
                        >
                          State / Province
                        </FormLabel>
                        <Input
                          type="text"
                          name="state"
                          id="state"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                        />
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="postal_code"
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: "gray.50",
                          }}
                        >
                          ZIP / Postal
                        </FormLabel>
                        <Input
                          type="text"
                          name="postal_code"
                          id="postal_code"
                          autoComplete="postal-code"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                        />
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
                    _dark={{
                      bg: "#121212",
                    }}
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

              {/* <form
              name="Contact Form"
              method="POST"
              data-netlify="true"
              data-netlify-recaptcha="true"
              action="/thank-you"
            >
              <input type="hidden" name="form-name" value="Contact Form" />
              <div>
                <label>Your Email:</label>
                <input type="email" name="email" />
              </div>
              <div>
                <label>Message:</label>
                <textarea name="message" />
                <ReCAPTCHA sitekey="{process.env.GATSBY_RECAPTCHA_KEY}" />
              </div>
              <button type="submit">Send</button>
            </form> */}
            </SimpleGrid>
          </Box>
        </Box>
        <ContactFormPage />
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
