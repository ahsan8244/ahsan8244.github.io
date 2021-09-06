import React from "react";
import { Box } from "@chakra-ui/react";

type LayoutProps = {
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <Box m="auto" p={2} w={["100%", "60%", "40%"]}>
      <title>{title}</title>
      {children}
    </Box>
  )
}