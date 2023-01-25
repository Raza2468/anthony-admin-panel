
import { useState } from 'react';
import { Container, Grid, GridItem, Sidebar, Stack } from '@chakra-ui/react';
import {
    Box, Center, Select, Textarea, FormLabel, InputGroup, Input,
    HStack, Heading, Text, Flex, Button, VStack, Image, FormControl
} from '@chakra-ui/react';



export default function Nodes() {


    return (
        <div>

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
                            justifyContent='start'
                         
                            boxShadow="2xl"
                            // style={{ justifyContent: "space-around" }}
                            // width="90%"
                            height="10vh"
                            align="center"
                            rounded="md"
                            mt="4"
                            backgroundColor='#2347F0'
                            color='whatsapp.100'
                        >
                            <Text    ml="2%" fontSize='38px'>Summary</Text>
                        </HStack>


                        <HStack
                            // justifyContent="center"
                            boxShadow="2xl"
                            // style={{ justifyContent: "space-around" }}
                            // width="90%"
                            height=""
                            align="center"
                            rounded="md"
                            mt="4"
                            backgroundColor='white'
                            color='gray'
                        >
                            <Flex>
                                <Box flex="1" bg="">
                                    <Textarea
                                        // value={value}
                                        // onChange={handleInputChange}
                                        placeholder='Here is a sample placeholder'
                                        size='sm'
                                    />
                                </Box>

                                {/* <Box flex="1" bg="" ml="2%">
                                    <HStack>

                                        <FormControl mt="2%">
                                            <FormLabel textColor="gray">
                                                Aggregate
                                            </FormLabel>
                                            <Select placeholder="Select Amount">
                                                <option>$100,000 / $200,000</option>
                                                <option>$200,000 / $300,000</option>
                                            </Select>
                                        </FormControl>

                                        <FormControl mt="2%">
                                            <FormLabel textColor="gray">
                                                Aggregate
                                            </FormLabel>
                                            <Select placeholder="Select Amount">
                                                <option>$5000</option>
                                                <option>$6000</option>
                                                <option>$7000</option>
                                            </Select>
                                        </FormControl>
                                    </HStack>
                                </Box> */}
                            </Flex>
                        </HStack>

                    </Box>

                </Flex>
            </Container>
        </div>
    )
}