import { Box, Container } from "@chakra-ui/react";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box>
      <Sidebar />
      
      <Box w="100%" pl={{ base: 100, md: 250 }} transition="all 0.3s ease">
        <Navbar />
        <Box minH="100vh" pt={100}>
          <Container maxW="6xl">
            <Outlet />
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
