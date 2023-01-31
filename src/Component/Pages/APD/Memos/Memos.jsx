import { useState } from 'react'
import {
    Container,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Radio, RadioGroup, Stack, Checkbox, CheckboxGroup, Select, FormLabel, FormControl, Textarea
} from '@chakra-ui/react'
import {
    Box, Center, IconButton, InputLeftElement, Divider, InputGroup, Input,
    HStack, Heading, Text, Flex, Button, VStack, Image, AspectRatio
} from '@chakra-ui/react';

// import Header from '../../../Header/Header'
function Memos() {
    return (
        <>
            {/* <Header /> */}

            <Container maxW="container" marginLeft="15%" p='10' width="" rounded='lg'
                boxShadow='md'
                columns={{ sm: 2, md: 4 }}
            // backgroundColor='.100'
            // spacing='8'
            // textAlign='center'
            // backgroundColor='#F6F6F6'
            >
                <Flex h="" width='auto'
                // rounded='md'
                // boxShadow='md'
                // backgroundColor=''
                // flex-direction= 'column'
                >
                    {/* start */}
                    <Box flex="1" flex-direction='column'>
                        <VStack>

                           
                            <Box
                                h="280px" width="100%"
                                rounded='xl'
                                boxShadow='lg'
                                backgroundColor='#F6F6F6'
                            >
                                <HStack
                                    h={'80%'}
                                    w={'100%'}
                                >


                                    <VStack
                                        width={'50%'}
                                        height={'100%'}
                                        p={4}
                                        alignItems={'flex-start'}
                                    >
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>POLICY NO:</Text><Text fontWeight={'bold'}>QuoteEM911844</Text></HStack>
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>INSURED:</Text><Text fontWeight={'bold'}>Name</Text></HStack>
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>DBA:</Text><Text fontWeight={'bold'}>Name</Text></HStack>
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>STATE:</Text><Text fontWeight={'bold'}>South Caroline</Text></HStack>
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>LINE:</Text><Text fontWeight={'bold'}>APD</Text></HStack>

                                    </VStack>

                                    <VStack
                                        width={'50%'}
                                        height={'100%'}
                                        p={4}
                                        alignItems={'flex-start'}
                                    >
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>STATUS:</Text><Text fontWeight={'bold'}>QUOTE 01/17/2023</Text></HStack>
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>TERM:</Text><Text fontWeight={'bold'}>1 YEAR</Text></HStack>
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>EFFECTIVE</Text><Text fontWeight={'bold'}>01/17/2023</Text></HStack>
                                        <HStack><Text fontWeight={'bold'} color={'blue'}>EXPIRATION:</Text><Text fontWeight={'bold'}>01/17/2024 </Text></HStack>


                                    </VStack>
                                </HStack>
                                <HStack
                                    width={'100%'}
                                    height={'20%'}
                                    alignItems={'center'}
                                    justifyContent={'space-evenly'}
                                >
                                    <Button bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>ePaper</Button>
                                    <Button bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>Items Needed and Forms</Button>
                                    <Button bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>Contracts</Button>

                                </HStack>

                            </Box>





                            <Box
                                h="60px" width="100%"
                                rounded='xl'
                                boxShadow='md'
                                backgroundColor='blue'
                                display='flex'
                                alignItem='center'
                                justifyContent='space-evenly'
                            >
                                <Center color='white' >
                                    To cc From <Checkbox backgroundColor='white' ml={'2em'} mr={'1em'} ></Checkbox> Reply To Me <Checkbox mr={'1em'} ml={'2em'} backgroundColor='white'></Checkbox>CC To Me  <Text ml={'2em'}>(tdilbuono@ameliaunderwrite.com)</Text>
                                </Center>

                            </Box>

                            <Box
                                h="" width="100%"
                                rounded='md'
                                boxShadow='md'
                            >
                                <HStack
                                    h="80%"
                                    width="100%"
                                    p={4}
                                >

                                    <VStack
                                        h="100%"
                                        width="30%"
                                    >
                                        <HStack
                                            h="50%"
                                            width="100%"
                                            alignItems={'flex-start'}
                                        >
                                            <VStack
                                                h="100%"
                                                width="50%"
                                                alignItems={'flex-start'}
                                            >
                                                <HStack><Text>Company :</Text> </HStack>
                                                <HStack> <Text>Agents :</Text> </HStack>
                                                <HStack><Text>MGA :</Text> </HStack>
                                                <HStack><Text>TPA :</Text> </HStack>
                                                <HStack><Text>Insured :</Text> </HStack>
                                                <HStack><Text>Other :</Text> </HStack>
                                            </VStack>
                                            <VStack
                                                h="80%"
                                                width="50%"
                                                alignItems={'flex-start'}
                                                justifyContent={'space-evenly'}


                                            >
                                                <HStack h={6}><Checkbox></Checkbox> <Checkbox></Checkbox></HStack>
                                                <HStack h={6}><Checkbox></Checkbox> <Checkbox></Checkbox></HStack>
                                                <HStack h={6}><Checkbox></Checkbox> <Checkbox></Checkbox><Checkbox></Checkbox></HStack>
                                                <HStack h={6}><Checkbox></Checkbox> <Checkbox></Checkbox></HStack>
                                                <HStack h={6}><Checkbox></Checkbox> <Checkbox></Checkbox></HStack>
                                                <HStack h={6}><Checkbox></Checkbox> <Checkbox></Checkbox></HStack>

                                            </VStack>
                                        </HStack>
                                        <HStack
                                            h="50%"
                                            width="100%"
                                            alignItems={'flex-start'}
                                        >
                                            <VStack
                                                h="100%"
                                                width="50%"
                                                alignItems={'flex-start'}
                                            >
                                                <HStack><Text>Name :</Text> </HStack>
                                                <HStack> <Text>Street :</Text> </HStack>
                                                <HStack><Text>City :</Text> </HStack>
                                                <HStack><Text>State Zip :</Text> </HStack>
                                            </VStack>

                                        </HStack>
                                    </VStack>
                                    <VStack
                                        width="30%"
                                        p={2}
                                    >
                                        <Select size='s' rounded='lg' />
                                        <Select size='s' rounded='lg' />
                                        <Input size='s' rounded='lg' />
                                        <Select size='s' rounded='lg' />
                                        <Input size='s' rounded='lg' />
                                        <Input size='s' rounded='lg' />

                                        <Input size='s' rounded='lg' />
                                        <Input size='s' rounded='lg' />
                                        <Input size='s' rounded='lg' />
                                        <HStack>
                                            <Select size='s' rounded='lg' />
                                            <Input size='s' rounded='lg' />
                                            <Input size='s' rounded='lg' />
                                        </HStack>

                                    </VStack>
                                </HStack>
                                <HStack
                                    display={'flex'}
                                    flexDirection="column"
                                    h='30%'
                                    w={'100%'}
                                    p={4}
                                >
                                    <HStack
                                        w={'100%'}> <Text>Subject:</Text></HStack>
                                    <HStack
                                        w={'90%'}

                                    >
                                        <Textarea />
                                    </HStack>
                                </HStack>
                                <HStack
                                    display={'flex'}
                                    flexDirection="column"
                                    h='30%'
                                    w={'100%'}
                                    p={4}
                                >
                                    <HStack
                                        w={'100%'}> <Text>Body:</Text></HStack>
                                    <HStack
                                        w={'90%'}

                                    >
                                        <Textarea />
                                    </HStack>
                                </HStack>
                                <HStack
                                    h='30%'
                                    w={'100%'}
                                    p={4}
                                >
                                    <VStack
                                        w={'35%'}
                                    >
                                        <HStack w={'100%'}>
                                            <Text w={'30%'} >Policy Type:</Text>
                                            <Select size={'sm'}
                                                w={'70%'}
                                                rounded={'md'}
                                            />
                                        </HStack>

                                    </VStack>
                                    <VStack
                                        w={'35%'}

                                    >
                                        <HStack w={'100%'}>
                                            <Text w={'20%'}>Line:</Text>
                                            <Select size={'sm'}
                                                w={'60%'}
                                                rounded={'md'}
                                            />
                                        </HStack>

                                    </VStack>
                                    <VStack
                                        w={'35%'}
                                    >
                                        <Button bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }} fontSize={14} >(Application to Catch All only!)</Button>

                                    </VStack>
                                </HStack>
                                <HStack
                                    h='50px'
                                    p={4}
                                >
                                    <HStack ><Text>Attach File(s)</Text></HStack>
                                    <Button bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>Choose File</Button>

                                </HStack>
                                <HStack
                                    p={4}
                                >
                                    <Text>Drag the Files To the Below or Click "Choose File" Button</Text>
                                </HStack>
                                <HStack
                                    p={4}>
                                    <Textarea ></Textarea>
                                </HStack>
                                <HStack
                                    p={4}
                                    justifyContent="center"
                                >
                                    <Button bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>Preview</Button>
                                </HStack>
                            </Box>
                            <Box
                                h="60px" width="100%"
                                rounded='xl'
                                boxShadow='md'
                                backgroundColor='blue'
                                display='flex'
                                alignItem='center'
                                justifyContent='space-evenly'
                            >
                                <Center color='white' >
                                    Send<Radio backgroundColor='white' ml={'2em'} mr={'1em'} ></Radio> Memos<Radio backgroundColor='white' ml={'2em'} mr={'1em'} ></Radio>Template
                                </Center>

                            </Box>
                            <Box
                                h="120vh" width="100%"
                                rounded='xl'
                                boxShadow='md'
                                p={4}
                            >

                                <HStack p={4} >
                                    <Text>Type:</Text>
                                    <Checkbox>Catch All Amelia</Checkbox>
                                    <Checkbox>Generic</Checkbox>
                                </HStack>
                                <Box>
                                    <HStack p={4} ><Text>Line:</Text></HStack>
                                    <HStack
                                        height={'100%'}
                                        alignItems={''}
                                    >
                                        <VStack
                                            w="25%"
                                            h={'100%'}
                                            alignItems={'flex-start'}
                                        >
                                            <Checkbox>All Lines</Checkbox>
                                            <Checkbox>Auto Physical Damage</Checkbox>
                                            <Checkbox>Contingency</Checkbox>
                                            <Checkbox>Dwelling Fire</Checkbox>
                                            <Checkbox>Excess APD</Checkbox>
                                            <Checkbox>Flood</Checkbox>
                                            <Checkbox>Generic Liability</Checkbox>
                                            <Checkbox>Jewelers Block</Checkbox>
                                            <Checkbox>Motor Truk Cargo</Checkbox>
                                            <Checkbox>OCP</Checkbox>
                                            <Checkbox>Professional Liability</Checkbox>
                                            <Checkbox>Tokio Marine</Checkbox>
                                            <Checkbox>Catch All Amelia</Checkbox>
                                            <Checkbox>Wind deductible Buyback</Checkbox>
                                            <Checkbox>Generic</Checkbox>
                                        </VStack>
                                        <VStack
                                            w="25%"
                                            h={'100%'}
                                            alignItems={'flex-start'}
                                        >
                                            <Checkbox>Artisan</Checkbox>
                                            <Checkbox>BOP</Checkbox>
                                            <Checkbox>Contingent Liability</Checkbox>
                                            <Checkbox>Earthquake</Checkbox>
                                            <Checkbox>Excess MTC</Checkbox>
                                            <Checkbox>Flood Rated</Checkbox>
                                            <Checkbox>Home Owners</Checkbox>
                                            <Checkbox>Kidnap & Ransion</Checkbox>
                                            <Checkbox>MTC</Checkbox>
                                            <Checkbox>Package</Checkbox>
                                            <Checkbox>Property</Checkbox>
                                            <Checkbox>Umberilla</Checkbox>
                                            <Checkbox>Work Camp</Checkbox>

                                        </VStack>
                                        <VStack
                                            w="25%"
                                            h={'100%'}
                                            alignItems={'flex-start'}
                                        >
                                            <Checkbox>Auto</Checkbox>
                                            <Checkbox>Builder Risk</Checkbox>
                                            <Checkbox>Contingent MTC</Checkbox>
                                            <Checkbox>Enviromental Liability</Checkbox>
                                            <Checkbox>Farm</Checkbox>
                                            <Checkbox>Garge liabilty</Checkbox>
                                            <Checkbox>Home Owners</Checkbox>
                                            <Checkbox>Liquor</Checkbox>
                                            <Checkbox>Non-Trucing Liabilty</Checkbox>
                                            <Checkbox>Personal Accident</Checkbox>
                                            <Checkbox>Special Events</Checkbox>
                                            <Checkbox>Vacant Property</Checkbox>
                                            <Checkbox>Workers Compension</Checkbox>
                                        </VStack>
                                        <VStack
                                            w="25%"
                                            h={'100%'}
                                            alignItems={'flex-start'}
                                        >
                                            <Checkbox>Auto PD</Checkbox>
                                            <Checkbox>Canine Liability </Checkbox>
                                            <Checkbox>Contractor Equipment</Checkbox>
                                            <Checkbox>Excess</Checkbox>
                                            <Checkbox>Fine Arts</Checkbox>
                                            <Checkbox>GargeKeepers Liability</Checkbox>
                                            <Checkbox>Inland Marine</Checkbox>
                                            <Checkbox>Logging Equipment</Checkbox>
                                            <Checkbox>Ocean Marin</Checkbox>
                                            <Checkbox>Portal</Checkbox>
                                            <Checkbox>Terrorism</Checkbox>
                                            <Checkbox>Wind</Checkbox>
                                            <Checkbox>Wrap Up Liability</Checkbox>
                                        </VStack>

                                    </HStack>

                                    <Box
                                        h={"10vh"}
                                    >
                                        <HStack
                                            p={4}>
                                            <VStack
                                                w={'30%'}
                                            >
                                                <HStack>
                                                    <Text>Author</Text>
                                                    <Select w={'150px'} />
                                                </HStack>

                                            </VStack>
                                            <VStack
                                                w={'30%'}
                                            >
                                                <Radio>Status Spacific</Radio>
                                            </VStack>
                                            <VStack
                                                w={'30%'}
                                                display={'flex'}
                                            >
                                                <Radio>Entire Policy History</Radio>
                                            </VStack>
                                        </HStack>

                                    </Box>
                                    <HStack
                                        h={"10vh"}
                                        justify={'space-evenly'}>
                                        <Button bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>Reset</Button>
                                        <Button bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>View Sent Memos?Templtes</Button>

                                    </HStack>
                                </Box>

                            </Box>
                        </VStack>

                    </Box>


                </Flex>
            </Container>
        </>
    )
}

export default Memos