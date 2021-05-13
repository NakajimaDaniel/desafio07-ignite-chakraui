import { Box, Flex, Grid, Image, Text, Wrap } from "@chakra-ui/react";
import React from "react";


export function TravelTypes() {
  return (
    <Flex justifyContent="center" pl="8" pr="8">
      <Grid templateColumns="repeat(5, 1fr)" gap="20">

        <Box align="center">
          <Image src="cocktail.png" />
          <Text fontWeight="semibold" pt="4">vida noturna</Text>
        </Box>

        <Box align="center">
          <Image src="surf.png" />
          <Text fontWeight="semibold" pt="4">praia</Text>
        </Box>

        <Box align="center">
          <Image src="building.png" />
          <Text fontWeight="semibold" pt="4">moderno</Text>
        </Box>

        <Box align="center">
          <Image src="museum.png" />
          <Text fontWeight="semibold" pt="4">clássico</Text>
        </Box>

        <Box align="center">
          <Image src="earth.png" />
          <Text fontWeight="semibold" pt="4">e mais ...</Text>
        </Box>
          

      </Grid>
    </Flex>
  )
}