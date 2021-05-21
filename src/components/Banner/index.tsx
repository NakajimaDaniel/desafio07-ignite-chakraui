
import  { Image, Container, Flex, Box, Text} from '@chakra-ui/react'



export function Banner() {

 
  return (
    <Flex w="100%" mb="8" pb="10">
      <Box position="relative" sx={{
        "@media screen and (max-width: 375px)": {
            height: "100%",
        },
      }}>
   
          <Image 
            src="bannerback.png" 
            w="100vw"
            sx={{"@media screen and (max-width: 700px)": {
              height: '250'
            },
              "@media screen and (max-width: 400px)": {
                height: '40vh'
              }
            }}
          />
          <Text 
            position="absolute" 
            top="20%"  
            left="10%" 
            color="white" 
            fontSize={["20","20","20","40"]}
            sx={{"@media screen and (max-width:700px)": {
              fontSize: '25',
              top: '18%'
              },
              "@media screen and (max-width:400px)": {
                top:'10%'
              }  
            }
            }
            
          >
              5 Continentes,
          </Text>
          <Text
            position="absolute" 
            top="35%"  
            left="10%" 
            color="white"  
            fontSize={["20","20","20","40"]} 
            sx={{"@media screen and (max-width:700px)": {
              fontSize: '25',
            },
              "@media screen and (max-width: 400px)": {
                top: '25%'
              }
            }}
           >
             infinitas possibilidades.
          </Text>
          <Text 
            position="absolute" 
            top="55%"  
            left="10%" 
            color="gray.500"  
            fontSize={["10","10","20"]} 
            maxW={[300,300,400,500]}
            sx={{"@media screen and (max-width:700px)": {
              fontSize: '15',
              maxW: '500'
            },
            "@media screen and (max-width: 400px)": {
              top: "50%"
            },
            "@media screen and (max-width: 330px)": {
              top: "60%",
              fontSize: '13'
            }
          }
          }
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
          <Image 
            position="absolute" 
            top="20%" 
            right="10%" 
            src="Airplane.png" 
            w="30%" 
            sx={{"@media screen and (max-width:700px)": {
              display: 'none',
            }}}
          />

      </Box>
      
    </Flex>
    
  )
}

