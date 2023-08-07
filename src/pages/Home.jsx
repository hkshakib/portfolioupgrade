import { HStack } from "@chakra-ui/react";
import DescriptionContainer from "../components/DescriptionContainer";
import ImageContainer from "../components/ImageContainer";

const Home = () => {
  return (
    <HStack justifyContent="space-between" padding={20}>
      <DescriptionContainer />
      <ImageContainer />
    </HStack>
  );
};

export default Home;
