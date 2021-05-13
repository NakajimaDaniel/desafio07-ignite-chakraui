import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" w="100%" justifyContent="center" pb="8" pt="8">
      <Image src="/logo.png"></Image>
    </Flex>
  )
}