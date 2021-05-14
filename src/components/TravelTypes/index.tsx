import { Box, Flex, Grid, Image, Text, Wrap } from "@chakra-ui/react";
import React from "react";


export function TravelTypes() {
  return (
    <Flex justifyContent="center" pl="8" pr="8" pb="8" mb="8">
      <Grid templateColumns="repeat(5, 1fr)" gap="8rem">

        <Box align="center">
          <Image src="cocktail.png" />
          <Text fontWeight="semibold" pt="4" color="gray.600">vida noturna</Text>
        </Box>

        <Box align="center" w="100%">
          <Image src="surf.png" />
          <Text fontWeight="semibold" pt="4" color="gray.600">praia</Text>
        </Box>

        <Box align="center" w="100%">
          <Image src="building.png" />
          <Text fontWeight="semibold" pt="4" color="gray.600">moderno</Text>
        </Box>

        <Box align="center" w="100%">
          <Image src="museum.png" />
          <Text fontWeight="semibold" pt="4" color="gray.600">clássico</Text>
        </Box>

        <Box align="center" w="100%">
          <Image src="earth.png" />
          <Text fontWeight="semibold" pt="4" color="gray.600">e mais ...</Text>
        </Box>
          

      </Grid>
    </Flex>
  )
}