import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

type ProjectProps = {
  title: string;
  type: string;
  link?: string;
  description: string;
}

export const Project: React.FC<ProjectProps> = ({ title, type, link, description }) => {
  return (
    <Box my={4}>
      <Flex align="center">
        <Text mr={2} fontSize="lg" fontWeight="bold">{title}</Text>
        <Text fontStyle="italic" fontSize="sm">{type}</Text>
      </Flex>
      <Text>{description}</Text>
      {
        link && <a href={link} style={{ color: "#3182CE", fontSize: "14px" }}>check it out</a>
      }
    </Box>
  )
}