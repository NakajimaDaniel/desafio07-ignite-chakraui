import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" w="100%" justifyContent="center" p="2">
      <Image src="/logo.png"></Image>
    </Flex>
  )
}