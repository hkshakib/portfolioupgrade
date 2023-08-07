import { Button, HStack, List, ListItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px" dropShadow={1}>
      <Button
        fontWeight="bold"
        marginLeft={{
          base: 0,
          lg: 5,
        }}
        paddingLeft={{
          base: "1px",
          lg: "10px",
        }}
        variant="outlined"
      >
        HKSHAKIB
      </Button>
      <List
        display={{
          base: "none",
          lg: "block",
        }}
      >
        <HStack
          justifyContent="space-between"
          spacing={5}
          fontSize={{
            base: "12px",
            lg: "14px",
          }}
        >
          <ListItem cursor="pointer">Skills</ListItem>
          <ListItem cursor="pointer">Problem Solving</ListItem>
          <ListItem cursor="pointer">Experience</ListItem>
          <ListItem cursor="pointer">Projects</ListItem>
          <ListItem cursor="pointer">Research</ListItem>
          <ListItem cursor="pointer">Education</ListItem>
          <ListItem cursor="pointer">Achivement</ListItem>
        </HStack>
      </List>
      <Button
        colorScheme="teal"
        color="black"
        variant="outline"
        marginRight={2}
        display={{
          base: "none",
          lg: "block",
        }}
        fontSize={{
          base: "14px",
          md: "12px",
        }}
      >
        Download Resume
      </Button>
      <Button
        display={{
          base: "block",
          lg: "none",
        }}
      >
        <HamburgerIcon />
      </Button>
    </HStack>
  );
};

export default NavBar;
