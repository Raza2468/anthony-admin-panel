import { useState } from 'react';
// import { Container, Grid, GridItem, Sidebar, Stack } from '@chakra-ui/react';
import {
    Box, Center, IconButton, InputLeftElement, Divider, InputGroup, Input,
    HStack, Heading, Text, Flex, VStack, Image, AspectRatio, Accordion,
    AccordionItem, Container,
    AccordionButton, Button,
    AccordionPanel, Select,
    AccordionIcon, FormLabel, FormControl
} from '@chakra-ui/react';


import { Checkbox } from 'antd';



export default function GL() {


    return (
        <div>

            <Container maxW="container" marginLeft="15%" p='10' width="" rounded='lg'
                boxShadow='md'
                columns={{ sm: 2, md: 4 }}
            // backgroundColor='red.100'
            // spacing='8'
            // textAlign='center'
            // backgroundColor='#F6F6F6'
            >
                <HStack>
                    <Box flex='1' padding='2%'>
                        <Accordion allowToggle >
                            <AccordionItem mt='2%'>
                                <h2>
                                    <AccordionButton _expanded={{ bg: '#2347F0', color: 'white' }}>
                                        <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                            MGA View Only Data
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>

                                <AccordionPanel pb={4}>
                                    <Flex>
                                        <Box flex='1' bg=''>
                                            <Heading size="32" textColor='gray'>Policy Locked <Checkbox> </Checkbox></Heading>

                                            <FormControl isRequired mt='2%'>
                                                <FormLabel textColor='gray'>Policy No.</FormLabel>
                                                <Input placeholder='QuoteEM911799' />
                                            </FormControl>

                                            <HStack mt='2%'>
                                                <FormControl isRequired>
                                                    <FormLabel textColor='gray'>First Name</FormLabel>
                                                    <Input placeholder='First name' variant='outline' />
                                                </FormControl>

                                                <FormControl isRequired>
                                                    <FormLabel textColor='gray'>Middle Name</FormLabel>
                                                    <Input placeholder='Middle name' />
                                                </FormControl>

                                                <FormControl isRequired>
                                                    <FormLabel textColor='gray'>Last Name</FormLabel>
                                                    <Input placeholder='Last name' />
                                                </FormControl>
                                            </HStack>

                                            <HStack mt='2%'>
                                                <FormControl isRequired>
                                                    <FormLabel textColor='gray'>Busniess Name</FormLabel>
                                                    <Input placeholder='Enter Busniess Name' />
                                                </FormControl>

                                                <FormControl isRequired>
                                                    <FormLabel textColor='gray'>DBA Name</FormLabel>
                                                    <Input placeholder='Enter DBA Name' />
                                                </FormControl>
                                            </HStack>

                                            <Text fontWeight="bold" mt="2%">Line: GL Rate</Text>
                                        </Box>

                                        <Box flex='1' bg='' ml='2%'>
                                            <Heading size="32" textColor='gray'>Status Quoto: 1/23/2023</Heading>

                                            <FormControl isRequired mt='2%'>
                                                <FormLabel textColor='gray'>Term:</FormLabel>
                                                <Input placeholder='1 Year' />
                                            </FormControl>
                                            <FormControl isRequired mt='2%'>
                                                <FormLabel textColor='gray'>Effective:</FormLabel>
                                                <Input placeholder='1/23/2023' />
                                            </FormControl>
                                            <FormControl isRequired mt='2%'>
                                                <FormLabel textColor='gray'>Experation:</FormLabel>
                                                <Input placeholder='1/23/24' />
                                            </FormControl>

                                            <Text fontWeight="bold" mt="2%">STATE: ALABAMA</Text>
                                        </Box>
                                    </Flex>

                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem mt='2%'>
                                <h2>
                                    <AccordionButton _expanded={{ bg: '#2347F0', color: 'white' }}>
                                        <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                            GL Coverage
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Flex>
                                        <Box flex='1' bg=''>

                                            <FormControl mt='2%'>
                                                <FormLabel textColor='gray'>Each Occurance/General Aggregate</FormLabel>
                                                <Select placeholder='Select Amount'>
                                                    <option>$100,000 / $200,000</option>
                                                    <option>$200,000 / $300,000</option>
                                                </Select>
                                            </FormControl>

                                            <FormControl mt='2%'>
                                                <FormLabel textColor='gray'>Each Occurance/General Aggregate</FormLabel>
                                                <Select placeholder='Select Amount'>
                                                    <option>$5000</option>
                                                    <option>$6000</option>
                                                    <option>$7000</option>
                                                </Select>
                                            </FormControl>

                                        </Box>

                                        <Box flex='1' bg='' ml='2%'>
                                            <FormControl mt='2%'>
                                                <FormLabel textColor='gray'>Each Occurance/General Aggregate</FormLabel>
                                                <Select placeholder='Select Amount'>
                                                    <option>$100,000</option>
                                                    <option>$200,000</option>
                                                    <option>$300,000</option>
                                                </Select>
                                            </FormControl>

                                        </Box>
                                    </Flex>

                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem mt='2%'>
                                <h2>
                                    <AccordionButton _expanded={{ bg: '#2347F0', color: 'white' }}>
                                        <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                            Optional Coverages
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Flex>
                                        <Box flex='1' bg=''>

                                            <FormControl mt='2%'>
                                                <FormLabel textColor='gray'>Would you like to quite Marine coverage for this client:</FormLabel>
                                                <Select placeholder='Select Boolean'>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </Select>
                                            </FormControl>

                                        </Box>

                                        <Box flex='1' bg='' ml='2%'>
                                            <FormControl mt='2%'>
                                                <FormLabel textColor='gray'>Each Occurance/General Aggregate</FormLabel>
                                                <Select placeholder='Select Amount'>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </Select>
                                            </FormControl>

                                        </Box>
                                    </Flex>

                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem mt='2%'>
                                <h2>
                                    <AccordionButton _expanded={{ bg: '#2347F0', color: 'white' }}>
                                        <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                            Location
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Flex>
                                        <Box flex='1' bg=''>
                                            <HStack>
                                                <Text fontWeight='bold'>Location 1</Text> <Button colorScheme='blue' variant='solid'> Add Location +</Button>
                                            </HStack>

                                            <HStack>
                                                <FormControl mt='2%'>
                                                    <FormLabel textColor='gray'>Zip Code:</FormLabel>
                                                    <Select placeholder='Select'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </FormControl>
                                                <FormControl mt='2%'>
                                                    <FormLabel textColor='gray'>Country</FormLabel>
                                                    <Select placeholder='Select'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </FormControl>
                                            </HStack>

                                        </Box>

                                        <Box flex='1' bg='' ml='2%'>
                                            <Button colorScheme='blue' variant='solid'>Delet Location +</Button>
                                        </Box>
                                    </Flex>

                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem mt='2%'>
                                <h2>
                                    <AccordionButton _expanded={{ bg: '#2347F0', color: 'white' }}>
                                        <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                            Selected Class Codes
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Flex>
                                        <Box flex='1' bg=''>
                                            <HStack>
                                                <Text fontWeight='bold'>L1-</Text> <Button colorScheme='blue' variant='solid'> Add ClassCode +</Button>
                                            </HStack>

                                            <HStack>
                                                <FormControl mt='2%'>
                                                    {/* <FormLabel textColor='gray'>Zip Code:</FormLabel> */}
                                                    <Select placeholder='Location 1'>
                                                        <option>Location 2</option>
                                                        <option>Location 3</option>
                                                    </Select>
                                                </FormControl>
                                                <FormControl mt='4%'>
                                                    {/* <FormLabel textColor='gray'>Country</FormLabel> */}
                                                    <Select placeholder='Select'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </FormControl>
                                            </HStack>

                                        </Box>

                                        <Box flex='1' bg='' ml='2%'>
                                            {/* <Button colorScheme='blue' variant='solid'>Delet Location +</Button> */}
                                        </Box>
                                    </Flex>

                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem mt='2%'>
                                <h2>
                                    <AccordionButton _expanded={{ bg: '#2347F0', color: 'white' }}>
                                        <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                            Additional Insureds
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Flex>
                                        <Box flex='1' bg=''>
                                            <HStack>
                                                <Text fontWeight='bold'>Additional Insured</Text> <Button colorScheme='blue' variant='solid'> Add Location Additional Insured+</Button>
                                            </HStack>


                                            <FormControl mt='2%'>
                                                <FormLabel textColor='gray'>Type:</FormLabel>
                                                <Select placeholder='Not Select'>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </Select>
                                            </FormControl>

                                        </Box>

                                        <Box flex='1' bg='' ml='2%'>
                                            <Button colorScheme='blue' variant='solid'>Delet Location</Button>
                                            <HStack>
                                                <FormControl mt='2%'>
                                                    <FormLabel textColor='gray'>Waiver:</FormLabel>
                                                    <Select placeholder='Not Select'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </FormControl>
                                                <FormControl mt='2%'>
                                                    <FormLabel textColor='gray'>Primary & NC:</FormLabel>
                                                    <Select placeholder='Select'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </FormControl>
                                            </HStack>
                                        </Box>
                                    </Flex>

                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem mt='2%'>
                                <h2>
                                    <AccordionButton _expanded={{ bg: '#2347F0', color: 'white' }}>
                                        <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                            Agency Information
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Flex>
                                        <Box flex='1' bg=''>

                                            <FormControl mt='2%'>
                                                <FormLabel textColor='gray'>Agency and User:</FormLabel>
                                                <Select placeholder='Select'>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </Select>
                                            </FormControl>
                                            <Heading textColor='gray' size='32' mt="2%">Marketing Zone:</Heading>
                                        </Box>
                                        <Box flex='1' bg='' ml='2%'></Box>
                                    </Flex>

                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                </HStack>
            </Container>

        </div>
    )
}