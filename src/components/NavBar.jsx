import { Button, HStack, List, ListItem, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Text fontWeight="bold" marginLeft={5}>
        HKSHAKIB
      </Text>
      <List>
        <HStack justifyContent="space-between" spacing={10}>
          <ListItem cursor="pointer">Skills</ListItem>
          <ListItem cursor="pointer">Problem Solving</ListItem>
          <ListItem cursor="pointer">Experience</ListItem>
          <ListItem cursor="pointer">Projects</ListItem>
          <ListItem cursor="pointer">Research</ListItem>
          <ListItem cursor="pointer">Education</ListItem>
          <ListItem cursor="pointer">Achivement</ListItem>
        </HStack>
      </List>
      <Button marginRight={5}>Download Resume</Button>
    </HStack>
  );
};

export default NavBar;
