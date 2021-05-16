import { Flex, Image } from "@chakra-ui/react";
import Link from 'next/link'


export function Header() {
  return (
    <Flex as="header" w="100%" justifyContent="center" pb="6" pt="6">
      <Link href="/">
        <Image src="/logo.png" cursor="pointer" />
      </Link>  
    </Flex>
  )
}