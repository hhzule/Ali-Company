import React from "react"
import { ReactNode } from "react"
import {
  Box,
  Flex,
  Text,
  Avatar,
  HStack,
  Link as ChL,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  extendTheme,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { Link, useStaticQuery, graphql } from "gatsby"

const NavLink = ({ children }) => {
  const theme = extendTheme({
    colors: {
      bg: {
        100: "#0d1f2d",
      },
    },
  })

  return (
    <ChL
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      //   href={children.toLowerCase()}
    >
      {children}
    </ChL>
  )
}

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <header>
      <>
        <Box bg={useColorModeValue("bg.100", "bg.100")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box></Box>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                color={"white"}
              >
                <NavLink key={"Home"}>
                  <Link to="/">Home</Link>
                </NavLink>
                <NavLink key={"Blog"}>
                  <Link to="/blog">Blog</Link>
                </NavLink>
                <NavLink key={"About"}>
                  <Link to="/about">About</Link>
                </NavLink>
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Menu>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </Menu>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }} color={"white"}>
              <Stack as={"nav"} spacing={4}>
                <NavLink key={"Home"}>
                  <Link to="/">Home</Link>
                </NavLink>
                <NavLink key={"Blog"}>
                  <Link to="/blog">Blog</Link>
                </NavLink>
                <NavLink key={"About"}>
                  <Link to="/about">About</Link>
                </NavLink>
              </Stack>
            </Box>
          ) : null}
        </Box>

        {/* <Box p={4}>Main Content Here</Box> */}
      </>
    </header>
  )
}

export default Header
