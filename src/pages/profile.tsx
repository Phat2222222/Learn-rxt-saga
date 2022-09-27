import { Avatar, Box, Button, HStack, Input, Select, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
   
      <HStack spacing="15px">
        <Avatar
          cursor="pointer"
          width={300}
          h={300}
          name="Dan Abrahmov"
          src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/201123453_3081060568846516_3259814932842051445_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=7T4TDLUSByMAX_Pdb-G&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT8_POUUeRzWNgGEO7StPbZM1prs0mlshOMp4weC7jiwQA&oe=631F9E4E"
        />
        <Box p={2} w="300px">
          <Text>Name</Text>
          <Input htmlSize={4} mb={3} value="Le Tien Phat" />
          <Text>Phone number</Text>
          <Input htmlSize={4} mb={3} value="033303330033" />

          <Text>Email</Text>
          <Input htmlSize={4} mb={3} value="letienphat2207@gmail.com" />
          <Box mt={2}>
            <Button mr={2}>Update</Button>
            <Button>Cancel</Button>
          </Box>
        </Box>
      </HStack>
    
  );
}
