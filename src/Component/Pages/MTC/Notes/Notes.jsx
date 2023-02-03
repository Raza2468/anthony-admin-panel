
import { useState } from 'react';
import { Container, Grid, GridItem, Sidebar, Stack } from '@chakra-ui/react';
import {
    Box, Center, Select, Textarea, FormLabel, InputGroup, Input,
    HStack, Heading, Text, Flex, Button, VStack, Image, FormControl
} from '@chakra-ui/react';
import { useEffect } from 'react';



export default function Nodes() {
    const [number, setNumber] = useState(0)
    const [Secandary, setSecandary] = useState(0)

    if (number === 0) {

        console.log(number, "number", Secandary, "Secandary")
    }
    if (number !== 0) {
        let a = document.getElementById('raja')
        // var b = document.createElement('div').className('new item')
        a.append("-")

        // a.appendChild(b)
        // a.appendChild(b)
    }

    return (
        <div>
            {/* <Container maxW="container" marginLeft="15%" p='10' width="" rounded='lg'
                boxShadow='md'
                columns={{ sm: 2, md: 4 }}
                // backgroundColor='red.100'
                // spacing='8'
                // textAlign='center'
                // backgroundColor='#F6F6F6'

                mt='-4%'
            >


                <h1>NUM1: {number}</h1>
                <h1>NUM2: {Secandary}</h1>
                <div id='raja'>

                </div>
                {
                    Array(number).fill("").map((el,idx) => {
                        return <Box h={30} w={40} backgroundColor="green.100" />
                    })

                }



                <button onClick={() => {
                    setNumber(number + 1)
                    setSecandary(Secandary + 1)
                }}>Click me</button>
            </Container> */}

<Container maxW="container" marginLeft="15%" p='10' width="" rounded='lg'
                boxShadow='md'
                columns={{ sm: 2, md: 4 }}
                // backgroundColor='red.100'
                // spacing='8'
                // textAlign='center'
                // backgroundColor='#F6F6F6'
                mt='-4%'
            >
                <Flex h="" width='auto'
                    rounded='md'
                    boxShadow='md'
                // backgroundColor='#2347F0'
                >
                    {/* start */}
                    <Box flex="1" >
                        <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            // width="90%"
                            height="10vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            backgroundColor='#2347F0'
                            color='whatsapp.100'
                        >
                            <Text>Type</Text>
                            <Text>Policy # / Prev #</Text>
                            <Text>Named Issured</Text>
                            <Text>Team</Text>
                            <Text>Effective</Text>
                            <Text>Expiration</Text>
                            <Text>Status    </Text>
                        </HStack>
                        <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            // width="90%"
                            height="10vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            backgroundColor='white'
                            color='gray'
                        >
                            <Text></Text>
                            <Text>QuotoEM911846</Text>
                            <Text>New</Text>
                            <Text>1 Year</Text>
                            <Text>1/25/2023</Text>
                            <Text>1/25/2023</Text>
                            <Text>Quoto </Text>
                        </HStack>
                        <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            // width="90%"
                            height="10vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            backgroundColor='#2347F0'
                            color='whatsapp.100'
                        >
                            <Text>Type</Text>
                            <Text>Policy # / Prev #</Text>
                            <Text>Named Issured</Text>
                            <Text>Team</Text>
                            <Text>Effective</Text>
                            <Text>Expiration</Text>
                            <Text>Status    </Text>
                        </HStack>
                        <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            // width="90%"
                            height="10vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            mb={'20px'}
                            backgroundColor='white'
                            color='gray'
                        >
                            <Text></Text>
                            <Text>QuotoEM911846</Text>
                            <Text>New</Text>
                            <Text>1 Year</Text>
                            <Text>1/25/2023</Text>
                            <Text>1/25/2023</Text>
                            <Text>Quoto </Text>
                        </HStack>
                        <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            // width="90%"
                            height="10vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            backgroundColor='#2347F0'
                            color='whatsapp.100'
                        >
                            <Text    fontSize={'2xl'}  color={'white'}  fontWeight={'bold'}  >Summary</Text>
                        </HStack>
              <Box    bg={'white'} >
<Flex        >
</Flex>
<Flex      mb={'30px'}  justifyContent={'space-between'}  mt={'20px'}  >
    <Textarea      h={'200px'} maxW={'450px'}   border={'1px solid black'}  ></Textarea>
    <VStack>
    <Box>Types : </Box>
<Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
</VStack>
<VStack mr={'20px'} >
    <Box>Pages : </Box>
<Select    placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
<Center>
<Button    mt={'20px'} colorScheme='teal' variant='solid'>
    Button
  </Button>
</Center>
</VStack>
</Flex>
              </Box>
              <Box            borderRadius={'10px'}  p={'8px 10px'}   as='span'    bg={'gray.900'}  textColor={'white'}   fontSize={'2xl'}  >Status Spacific </Box>
              <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            // width="90%"
                            height="10vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            backgroundColor='#2347F0'
                            color='whatsapp.100'
                        >
                            <Text>Type</Text>
                            <Text>Policy # / Prev #</Text>
                            <Text>Named Issured</Text>
                            <Text>Team</Text>
                            <Text>Effective</Text>
                            <Text>Expiration</Text>
                            <Text>Status    </Text>
                        </HStack>
                        <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            // width="90%"
                            height="10vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            mb="4"
                            backgroundColor='white'
                            color='gray'
                        >
                            <Flex>
                            <Text>QuotoEM911846</Text>
                            <Text>New</Text>
                            <Text>1 Year</Text>
                            <Text>1/25/2023</Text>
                            <Text>1/25/2023</Text>
                            <Text>Quoto </Text>
                            </Flex>
                            <Button colorScheme='teal' variant='solid'>
    Button
  </Button>
                        </HStack>
                        <Box       mt={'30px'}       borderRadius={'10px'}  p={'8px 10px'}   as='span'    bg={'gray.900'}  textColor={'white'}   fontSize={'2xl'}  >Entire Policy History  </Box>
                        <HStack
                            justifyContent="center"
                            boxShadow="2xl"
                            style={{ justifyContent: "space-around" }}
                            // width="90%"
                            height="10vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            backgroundColor='#2347F0'
                            color='whatsapp.100'
                        >
                            <Text>Type</Text>
                            <Text>Policy # / Prev #</Text>
                            <Text>Named Issured</Text>
                            <Text>Team</Text>
                            <Text>Effective</Text>
                            <Text>Expiration</Text>
                            <Text>Status    </Text>
                        </HStack>
                    </Box>
                </Flex>
            </Container>
        </div>
    )
}