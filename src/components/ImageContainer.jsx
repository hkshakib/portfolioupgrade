import { Box, Image } from "@chakra-ui/react";

import Avatar from "../static/Avatar.JPG";

const ImageContainer = () => {
  return (
    <Box marginLeft={10}>
      <Image boxSize="250px" borderRadius="full" src={Avatar} alt="HKSHAKIB" />
    </Box>
  );
};

export default ImageContainer;
