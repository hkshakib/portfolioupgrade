import { Button, HStack, List, ListItem, useColorMode } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const MenuList = [
    { id: 1, Name: "Skills" },
    { id: 2, Name: "Problem Solving" },
    { id: 3, Name: "Experience" },
    { id: 4, Name: "Projects" },
    { id: 5, Name: "Research" },
    { id: 6, Name: "Education" },
    { id: 7, Name: "Achivement" },
  ];
  return (
    <HStack justifyContent="space-between" padding="10px">
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
          spacing={10}
          fontSize={{
            base: "11px",
            md: "11px",
            lg: "14px",
          }}
          whiteSpace="wrap"
        >
          {MenuList &&
            MenuList.map((Menu) => (
              <ListItem
                key={Menu.id}
                cursor="pointer"
                _hover={{ color: colorMode ? "#4477CE" : "#6528F7" }}
              >
                {Menu.Name}
              </ListItem>
            ))}
        </HStack>
      </List>
      <HStack spacing={20}>
        <Button
          colorScheme="gray"
          color={isDarkMode ? "white" : "black"}
          variant="outline"
          fontSize={{ base: "14px", md: "12px" }}
          display={{
            base: "none",
            lg: "block",
          }}
          _hover={{ color: colorMode ? "#4477CE" : "#6528F7" }}
        >
          Download Resume
        </Button>

        <ColorModeSwitch />

        <HamburgerIcon
          display={{
            base: "block",
            lg: "none",
          }}
        />
      </HStack>
    </HStack>
  );
};

export default NavBar;
