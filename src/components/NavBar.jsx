import { Button, HStack, List, ListItem, useColorMode } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
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
          whiteSpace="wrap"
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
        colorScheme={isDarkMode ? "white" : "black"}
        color={isDarkMode ? "white" : "black"}
        variant="outline"
        fontSize={{ base: "14px", md: "12px" }}
        display={{
          base: "none",
          lg: "block",
        }}
      >
        Download Resume
      </Button>

      <ColorModeSwitch />
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
