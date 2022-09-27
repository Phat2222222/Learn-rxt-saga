import { Box, Button, Container, IconButton, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { masthead } from "store/pageSlice";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  let masthead = "Dashboard";
  if (path !== "/") {
    masthead = path.substring(1);
  }
  if (path.includes("edit") === true) {
    masthead = path.substring(1, 5);
  }

  // const masthead = localStorage.getItem('path')

  return (
    <Box
      w="100%"
      h={100}
      // bg="rgba(50,50,50,0.5)"
      position="fixed"
    >
      <Container maxW="88rem" h="100%" display="flex" alignItems="center">
        <Box mr={2} display={{ base: "block", md: "none" }}>
          <IconButton aria-label="Menu" icon={<FiMenu />} />
        </Box>
        <Text fontSize="5xl" textTransform="uppercase">
          {masthead}
        </Text>
      </Container>
    </Box>
  );
}
