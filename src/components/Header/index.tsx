import { Flex, Image, useMediaQuery, Box } from "@chakra-ui/react";
import Link from 'next/link'
import {useRouter} from 'next/router'

export function Header() {

  const router = useRouter();
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")

  return (
    
    <> 
      <Box display={router.asPath === '/'? 'none': 'block'} >
        <Link href="/">
          <Image
            position="absolute"
            left="10%"
            transform="translate(-50%, 100%)"
            src="return.png" 
            sx={{"@media screen and (max-width: 500px)": {
              transform: 'translate(-50%, 80%)'
            }}}
            cursor="pointer"
          />
        </Link>
      </Box>
      
      <Flex as="header" w="100%" justifyContent="center" pb="6" pt="6">
        <Link href="/">
          {isLargerThan500? (
            <Image src="/logo.png" cursor="pointer" />
          ): (
            <Image src="/logo.png" cursor="pointer" boxSize="25%" />
          )}
          
        </Link>  
      </Flex>
    </>

  )
}