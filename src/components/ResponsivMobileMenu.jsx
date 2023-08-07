import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  CloseButton,
  HStack,
  VStack,
  Link,
  useColorMode,
  StackDivider,
  Button,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, DownloadIcon } from "@chakra-ui/icons";

const ResponsiveMobileMenue = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    <>
      <HamburgerIcon
        onClick={onOpen}
        display={{
          base: "block",
          lg: "none",
        }}
      />
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <HStack justifyContent="space-between" padding={2}>
            <DrawerHeader whiteSpace="no-wrap" fontSize="12px"></DrawerHeader>
            <CloseButton onClick={onClose} />
          </HStack>
          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <Button
                colorScheme="gray"
                color={isDarkMode ? "white" : "black"}
                variant="outline"
                fontSize={"12px"}
                width="150px"
                _hover={{ color: colorMode ? "#4477CE" : "#6528F7" }}
                startIcon={<DownloadIcon />}
              >
                <HStack spacing={2}>
                  <DownloadIcon />
                  <Text>Download Resume</Text>
                </HStack>
              </Button>

              {MenuList &&
                MenuList.map((Menu) => (
                  <Link
                    key={Menu.id}
                    cursor="pointer"
                    _hover={{ color: isDarkMode ? "#4477CE" : "#6528F7" }}
                  >
                    {Menu.Name}
                  </Link>
                ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ResponsiveMobileMenue;
