import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" w="100%" justifyContent="center" pb="6" pt="6">
      <Image src="/logo.png"/>
    </Flex>
  )
}