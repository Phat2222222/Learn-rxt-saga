import { Box, Button, list, Text, WrapItem } from "@chakra-ui/react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaSleigh, FaUserGraduate } from "react-icons/fa";
import SidebarBtn from "./sidebar-btn";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FalseLiteral } from "typescript";
import useOpen from "Hooks/useOpen";
import { useDispatch } from "react-redux";
import { changeMasthead, masthead } from "store/pageSlice";
import { useNavigate } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    url: "/",
    icon: <MdSpaceDashboard />,
  },
  {
    name: "Student",
    url: "/students",
    icon: <FaUserGraduate />,
  },
];

export default function Sidebar() {
  const { open, handleOpen } = useOpen();
  // const [isOpen, setOpen] = useState<boolean>();
  const navigate = useNavigate();
  //redux
  const dispatch = useDispatch();
  return (
    <Box
      h="100vh"
      w={{ base: 100, md: 250 }}
      position="fixed"
      top={0}
      left={0}
      borderRight="1px solid gray"
      p={3}
      transition="all 0.3s ease"
      // display={{ base: "none", sm: "block" }}
    >
      {links.map((link, index) => (
        <SidebarBtn key={link.name} name={link.name} icon={link.icon} url={link.url} />
      ))}

      <Box
        position="absolute"
        bottom={3}
        display="flex"
        bg="gray.100"
        padding={2}
        borderRadius="10"
        w="225px"
      >
        <Avatar
          cursor="pointer"
          onClick={() => handleOpen()}
          size="lg"
          name="Dan Abrahmov"
          src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/97064979_2681147668837810_3329057283165388800_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=xCJs_0kK74oAX-SLyQQ&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-tU4PQp4RhP1tfo470qIe4owGDTqyL-DMSYU1CCzKFrg&oe=635987EF"
        />

        <Box ml={2} display={{ base: "none", md: "block" }}>
          <Text fontSize="2xl">Welcome</Text>
          <Text>Phat</Text>
        </Box>
        {open && (
          <Box
            borderRadius="10px"
            bg="blue.300"
            position="absolute"
            h={100}
            left={0}
            bottom="81px"
            w="100%"
            padding={3}
            display="flex"
            flexDirection="column"
          >
            <Button mb={2} onClick={() => navigate("/profile")}>
              Profile
            </Button>
            <Button>Logout</Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
