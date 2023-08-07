import { VStack, HStack, Text, Icon } from "@chakra-ui/react";
import { FaHandsClapping } from "react-icons/fa6";

const DescriptionContainer = () => {
  return (
    <VStack align="stretch">
      <Text color="blue">
        Hey There <Icon color="orange" as={FaHandsClapping} /> I am
      </Text>
      <Text fontSize="33px">Humayun Kibria Shakib</Text>
      <HStack>
        <Text fontSize="26px" color="gray">
          Professional
        </Text>
        <Text fontSize="28px" fontWeight="bold">
          FullStack Web Developer
        </Text>
      </HStack>
      <Text>Empowering connections through code and creativity</Text>
    </VStack>
  );
};

export default DescriptionContainer;
