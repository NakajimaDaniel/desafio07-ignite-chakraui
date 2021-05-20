import { Flex, Image, useMediaQuery } from "@chakra-ui/react";
import Link from 'next/link'


export function Header() {

  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")

  return (
    <Flex as="header" w="100%" justifyContent="center" pb="6" pt="6">
      <Link href="/">
        {isLargerThan500? (
          <Image src="/logo.png" cursor="pointer" />
        ): (
          <Image src="/logo.png" cursor="pointer" boxSize="25%" />
        )}
        
      </Link>  
    </Flex>
  )
}