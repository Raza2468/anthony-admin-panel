import { useState } from 'react';
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

// import Header from '../../Header/Header';

function BuilderRisk() {
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
                        <VStack justifyContent='center' >

                    

                            <Box
                                h="100%" width="100%"
                                rounded='md'
                                boxShadow='md'
                                // backgroundColor='#F6F6F6'
                                display='flex'
                                alignItem='center'
                                justifyContent='space-evenly'
                            >
                                <Accordion allowToggle width={'100%'}>
                                    <AccordionItem >
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                            <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    MGA View Only Data
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack pb={4} borderBottom='1px' borderBottomColor='black.100' h='40%'>
                                                <Box borderRight='1px' borderRightColor='black.100' w='50%' h='90%' >
                                                    <HStack >
                                                        <RadioGroup defaultValue='1' w='50%'>
                                                            <Stack>
                                                                <Radio value='1'>Decide Later </Radio>
                                                                <Radio value='2'>Approval by MGA</Radio>
                                                                <Radio value='3'>Reject Application </Radio>
                                                            </Stack>
                                                        </RadioGroup>
                                                        <Stack spacing={5} w='50%' pt='20px' >
                                                            <Checkbox colorScheme='blue' >
                                                                Decide Later
                                                            </Checkbox>
                                                            <Checkbox colorScheme='blue'>
                                                                Company Approval
                                                            </Checkbox>
                                                            <Input borderRadius='5px' w='80%' size='sm' />
                                                        </Stack>
                                                    </HStack>


                                                </Box>
                                                <Box w='40%' h='90%' >
                                                    <HStack >
                                                        <Box defaultValue='1' w='50%'>
                                                            <Stack>
                                                                <Text>ePaper </Text>
                                                                <Text>Addf Forms</Text>
                                                                <Text>Contacts</Text>
                                                            </Stack>
                                                        </Box>
                                                        <Stack spacing={5} w='70%' pt='20px' >
                                                            <Checkbox colorScheme='blue' >
                                                                Policy Locked
                                                            </Checkbox>
                                                            <Text>MGA bind only !</Text>
                                                            <HStack><Text>RnQuote </Text> <Select placeholder='Let system decide' size='sm' borderRadius='5px' /></HStack>
                                                            <HStack w='100%'><Text>Submission Status :</Text>  <Select placeholder='select' size='sm' borderRadius='5px' /></HStack>
                                                        </Stack>
                                                    </HStack>
                                                </Box></HStack>


                                            <HStack p={4} borderBottom='1px' borderBottomColor='black.100' h='40%'>
                                                <Box w='100%' h='90%' >
                                                    <VStack alignItems='flex-start'>
                                                        <HStack>
                                                            <Text w='420px'>Signed application recived (logs) </Text>
                                                            <RadioGroup defaultValue='1'>
                                                                <HStack>
                                                                    <Radio value='1'>No </Radio>
                                                                    <Radio value='2'>Yes</Radio>
                                                                </HStack>
                                                            </RadioGroup>
                                                        </HStack>
                                                        <HStack>
                                                            <Text w='420px'>No Loss or loss runs recived: </Text>
                                                            <RadioGroup defaultValue='1'>
                                                                <HStack>
                                                                    <Radio value='1'>No </Radio>
                                                                    <Radio value='2'>Yes</Radio>
                                                                </HStack>
                                                            </RadioGroup>
                                                        </HStack>
                                                        <HStack>
                                                            <Text w='420px'>Payment Recived: </Text>
                                                            <RadioGroup defaultValue='1'>
                                                                <HStack>
                                                                    <Radio value='1'>No </Radio>
                                                                    <Radio value='2'>Yes</Radio>
                                                                </HStack>
                                                            </RadioGroup>


                                                        </HStack>
                                                        <HStack>
                                                            <Checkbox colorScheme='blue' fontWeight='bold'>
                                                                Block Emails
                                                            </Checkbox>
                                                        </HStack>

                                                    </VStack>


                                                </Box>
                                            </HStack>
                                            <Flex pt='20px'>
                                                <Box flex='1' bg='' >
                                                    <Heading size="32" textColor='black'>Policy Locked <Checkbox> </Checkbox></Heading>
                                                    <FormControl isRequi mt='2%'>
                                                        <FormLabel textColor='black'>Policy No.</FormLabel>
                                                        <Input placeholder='QuoteEM911799' />
                                                    </FormControl>
                                                    <HStack mt='2%'>
                                                        <FormControl isRequi>
                                                            <FormLabel textColor='black'>First Name</FormLabel>
                                                            <Input placeholder='First name' variant='outline' />
                                                        </FormControl>
                                                        <FormControl isRequi>
                                                            <FormLabel textColor='black'>Middle Name</FormLabel>
                                                            <Input placeholder='Middle name' />
                                                        </FormControl>
                                                        <FormControl isRequi>
                                                            <FormLabel textColor='black'>Last Name</FormLabel>
                                                            <Input placeholder='Last name' />
                                                        </FormControl>
                                                    </HStack>
                                                    <HStack mt='2%'>
                                                        <FormControl isRequi>
                                                            <FormLabel textColor='black'>Busniess Name</FormLabel>
                                                            <Input placeholder='Enter Busniess Name' />
                                                        </FormControl>
                                                        <FormControl isRequi>
                                                            <FormLabel textColor='black'>DBA Name</FormLabel>
                                                            <Input placeholder='Enter DBA Name' />
                                                        </FormControl>
                                                    </HStack>
                                                    <Text fontWeight="bold" mt="2%">Line: Builder Risk</Text>
                                                </Box>
                                                <Box flex='1' bg='' ml='2%'>
                                                    <Heading size="32" textColor='black'>Status Quoto: 1/23/2023</Heading>
                                                    <FormControl isRequi mt='2%'>
                                                        <FormLabel textColor='black'>Term:</FormLabel>
                                                        <Input placeholder='1 Year' />
                                                    </FormControl>
                                                    <FormControl isRequi mt='2%'>
                                                        <FormLabel textColor='black'>Effective:</FormLabel>
                                                        <Input placeholder='1/23/2023' />
                                                    </FormControl>
                                                    <FormControl isRequi mt='2%'>
                                                        <FormLabel textColor='black'>Experation:</FormLabel>
                                                        <Input placeholder='1/23/24' />
                                                    </FormControl>
                                                    <Text fontWeight="bold" mt="2%">STATE: ALABAMA</Text>
                                                    <Text fontWeight="bold" mt="2%">Company: LLoyds of London</Text>
                                                </Box>
                                            </Flex>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem mt='2%'>
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Agency Information
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Flex h={'210px'}>
                                                <Box flex="1" bg="">
                                                    <VStack >
                                                        <FormControl mt="10%">
                                                            <FormLabel textColor="gray">Agency and user</FormLabel>
                                                            <Select placeholder="Select">
                                                                <option>Yes</option>
                                                                <option>No</option>
                                                            </Select>
                                                        </FormControl>
                                                        <HStack alignSelf={'flex-start'}>
                                                            <Button colorScheme='blue'>Login as..</Button>
                                                            <Text>developer only</Text>
                                                        </HStack>
                                                        <HStack alignSelf={'flex-start'}>
                                                            <Text>Marketing Zone:</Text>
                                                        </HStack>
                                                    </VStack>
                                                </Box>

                                                <Box flex="1" bg="" ml="2%">
                                                    <Button colorScheme="#2347F0" variant="solid" ml='60%'>
                                                        Copy From user Profile
                                                    </Button>
                                                    <HStack>
                                                        <FormControl mt="2%">
                                                            <FormLabel textColor="gray">License #</FormLabel>
                                                            <Input />
                                                        </FormControl>
                                                        <FormControl mt="2%">
                                                            <FormLabel textColor="gray">
                                                                Agent's Name
                                                            </FormLabel>
                                                            <Input />
                                                        </FormControl>
                                                    </HStack>
                                                </Box>
                                            </Flex>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem mt='2%'>
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Eligibility
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack pb={1} h={'5%'} >
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Terrorism coverage:</Text>
                                                    </VStack>
                                                    <VStack w={'20%'} >

                                                        <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </Select>
                                                    </VStack>

                                                </HStack>


                                            </HStack>
                                            <HStack pb={1} h={'5%'}>
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Property in Transit Sublimit Can not exceed $100,000 limit:</Text>
                                                    </VStack>
                                                    <VStack w={'20%'} >
                                                        <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </Select>
                                                    </VStack>

                                                </HStack>


                                            </HStack>
                                            <HStack pb={1} h={'5%'}>
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Any moving of structures:</Text>
                                                    </VStack>
                                                    <VStack w={'20%'} >
                                                        <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </Select>
                                                    </VStack>

                                                </HStack>


                                            </HStack>
                                            <HStack pb={1} h={'5%'}>
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Is insu financially sound:</Text>
                                                    </VStack>
                                                    <VStack w={'20%'} >
                                                        <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </Select>
                                                    </VStack>

                                                </HStack>


                                            </HStack>
                                            <HStack pb={1} h={'5%'}>
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Did expiring carrier canceel or non renew?</Text>
                                                    </VStack>
                                                    <VStack w={'20%'} >
                                                        <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </Select>
                                                    </VStack>

                                                </HStack>


                                            </HStack>
                                            <HStack pb={1} h={'5%'}>
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Type pf entity:</Text>
                                                    </VStack>
                                                    <VStack w={'20%'} >
                                                        <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </Select>
                                                    </VStack>

                                                </HStack>


                                            </HStack>
                                            <HStack pb={1} h={'5%'}>
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Applicant:</Text>
                                                    </VStack>
                                                    <VStack w={'20%'} >
                                                        <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </Select>
                                                    </VStack>

                                                </HStack>


                                            </HStack>
                                            <HStack pb={1} h={'5%'}>
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Is the named insu a bank, financial or lending institution?</Text>
                                                    </VStack>
                                                    <VStack w={'20%'} >
                                                        <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </Select>
                                                    </VStack>

                                                </HStack>


                                            </HStack>
                                            <HStack pb={1} h={'5%'}>
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Will all contractor and subcontractor maintain a minimum CGL limit of $1,000,000?</Text>
                                                    </VStack>
                                                    <VStack w={'20%'} >
                                                        <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </Select>
                                                    </VStack>

                                                </HStack>


                                            </HStack>
                                            <HStack pb={1} h={'5%'} >
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Wil all constractor and subconstructors have a minmum of 2 years experience ?</Text>
                                                    </VStack>
                                                    <VStack w={'20%'} >
                                                        <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </Select>
                                                    </VStack>

                                                </HStack>


                                            </HStack>

                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem mt='2%'>
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Location
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack w={'100%'} >
                                                <VStack w={'50%'} alignItems={'flex-start'} h={'100%'} >
                                                    <HStack w={'100%'} >
                                                        <Text fontSize={'xl'} color={'blue'} >Location 1</Text>
                                                        <Button colorScheme='blue' size='sm'>Add Location +</Button>
                                                    </HStack>

                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Cause of Loss:</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select placeholder="Special" size='sm' borderRadius='5px'  >
                                                                <option>Yes</option>
                                                                <option>No</option>
                                                            </Select>
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Protection Class(ISO):</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                                <option>Yes</option>
                                                                <option>No</option>
                                                            </Select>
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Distance of Coast:</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select placeholder="Not Select" size='sm' borderRadius='5px'  >
                                                                <option>Yes</option>
                                                                <option>No</option>
                                                            </Select>
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Distance of Brush:</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                                <option>Yes</option>
                                                                <option>No</option>
                                                            </Select>
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Name of Contractor</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Input size='sm' borderRadius='5px' />


                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Estimated Start</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Estimated Completion:</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>% Completed?</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select placeholder="0%" size='sm' borderRadius='5px'  >
                                                                <option>1%</option>
                                                                <option>2%</option>
                                                            </Select>
                                                        </VStack>

                                                    </HStack>




                                                </VStack>
                                                <VStack w={'50%'} alignItems={'flex-end'} h={'100%'} >
                                                    <HStack >
                                                        <Button colorScheme='blue' size='sm'>Delete Location</Button>
                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Location Name:</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Street Address 1:</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Street Address 2:</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>City:</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>State:</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select placeholder="AL-US" size='sm' borderRadius='5px'  >
                                                                <option>Yes</option>
                                                                <option>No</option>
                                                            </Select>
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Zip Code:</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Zip 4:</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Country:</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select placeholder="Special" size='sm' borderRadius='5px'  >
                                                                <option>Yes</option>
                                                                <option>No</option>
                                                            </Select>
                                                        </VStack>

                                                    </HStack>

                                                </VStack>
                                            </HStack>

                                            {/* <HStack bg={'.100'} pt={1} > */}
                                            <HStack justifyContent={'center'} w={'100%'} >
                                                <Text fontSize={'xl'} fontWeight={'bold'} pt={5} pb={3}>Verify by Map Risk</Text>
                                            </HStack>
                                            <HStack pb={1} h={'5%'} >
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Is there any known sinkhole activity on the premises ?</Text>
                                                    </VStack>
                                                    <VStack w={'20%'} >
                                                        <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </Select>
                                                    </VStack>

                                                </HStack>


                                            </HStack>
                                            <HStack pb={1} h={'5%'} >
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Is site fenced?</Text>
                                                    </VStack>
                                                    <VStack w={'20%'} >
                                                        <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </Select>
                                                    </VStack>

                                                </HStack>


                                            </HStack>
                                            <HStack pb={1} h={'5%'} >
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Is site lighted and/or is there a 24 hour watchman?</Text>
                                                    </VStack>
                                                    <VStack w={'20%'} >
                                                        <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </Select>
                                                    </VStack>

                                                </HStack>


                                            </HStack>
                                            <HStack pb={2} h={'5%'} borderBottom={'1px'} borderBottomColor='black'>
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Is the project to be insu subject to more than two mortgages or other encumbrance or a mortgage provided by an individual or entity other than a financial institution?</Text>
                                                    </VStack>
                                                    <VStack w={'20%'} >
                                                        <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </Select>
                                                    </VStack>

                                                </HStack>


                                            </HStack>
                                            {/* </HStack> */}
                                            <HStack w={'100%'} pt={5} pb={3}>
                                                <VStack w={'50%'} alignItems={'flex-start'}>
                                                    <HStack>
                                                        <Text fontSize={'xl'} color={'blue'} >Building 1</Text>
                                                        <Button colorScheme='blue' size='sm'>Add Building +</Button>
                                                    </HStack>
                                                </VStack>
                                                <VStack w={'50%'} alignItems={'flex-end'}>
                                                    <Button colorScheme='blue' size='sm'>Delete Building</Button>
                                                </VStack>
                                            </HStack>
                                            <HStack pb={1} h={'5%'} >
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Will this building be vacant during the construction period?</Text>
                                                    </VStack>
                                                    <VStack w={'20%'} >
                                                        <Select placeholder="Yes" size='sm' borderRadius='5px'  >

                                                            <option>No</option>
                                                        </Select>
                                                    </VStack>

                                                </HStack>


                                            </HStack>
                                            <HStack pb={1} h={'5%'} >
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Project Type:</Text>
                                                    </VStack>
                                                    <VStack w={'20%'} >
                                                        <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </Select>
                                                    </VStack>

                                                </HStack>


                                            </HStack>
                                            <HStack pb={2} h={'5%'} >
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Will You need to include the existing structure under this policy?</Text>
                                                    </VStack>
                                                    <VStack w={'20%'} >
                                                        <Select placeholder="No" size='sm' borderRadius='5px'  >
                                                            <option>Yes</option>

                                                        </Select>
                                                    </VStack>

                                                </HStack>


                                            </HStack>

                                            <HStack bg={''} w={'100%'} >
                                                <VStack w={'70%'} bg={''} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'60%'} alignItems={'flex-start'}>
                                                                <Text>Construction Type:</Text>
                                                            </VStack>
                                                            <VStack w={'40%'} >
                                                                <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                                    <option>No</option>
                                                                    <option>Yes</option>

                                                                </Select>
                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'70%'} >
                                                                <Text>Year Built:</Text>
                                                            </VStack>
                                                            <VStack w={'30%'} >
                                                                <Input placeholder="0" size='sm' borderRadius='5px' />
                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>

                                            </HStack>
                                            <HStack bg={''} w={'100%'} >
                                                <VStack w={'70%'} bg={''} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'60%'} alignItems={'flex-start'}>
                                                                <Text>Shutters:</Text>
                                                            </VStack>
                                                            <VStack w={'40%'} >
                                                                <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                                    <option>No</option>
                                                                    <option>Yes</option>

                                                                </Select>
                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>
                                                <VStack w={'30%'} bg={''} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'70%'} >
                                                                <Text>Square Feet:</Text>
                                                            </VStack>
                                                            <VStack w={'30%'} >
                                                                <Input placeholder="0" size='sm' borderRadius='5px' />
                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>

                                            </HStack>
                                            <HStack bg={''} w={'100%'} >
                                                <VStack w={'70%'} bg={''} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'60%'} alignItems={'flex-start'}>
                                                                <Text>Number of Stories:</Text>
                                                            </VStack>
                                                            <VStack w={'40%'} >
                                                                <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                                    <option>No</option>
                                                                    <option>Yes</option>

                                                                </Select>
                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>
                                                <VStack w={'30%'} bg={''} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'70%'} >
                                                                <Text>Roof Type:</Text>
                                                            </VStack>
                                                            <VStack w={'30%'} >
                                                                <Select placeholder="Select" size='sm' borderRadius='5px'  >

                                                                    <option>yes</option>
                                                                    <option>no</option>
                                                                </Select>
                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>

                                            </HStack>
                                            <HStack bg={''} w={'100%'} >
                                                <VStack w={'70%'} bg={''} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'60%'} alignItems={'flex-start'}>
                                                                <Text>Writing Update:</Text>
                                                            </VStack>
                                                            <VStack w={'40%'} >
                                                                <HStack>
                                                                    <Select placeholder="No Update to this system" size='sm' borderRadius='5px' w={'70%'} >


                                                                    </Select>
                                                                    <Select placeholder="Select" size='sm' borderRadius='5px' w={'30%'}>


                                                                    </Select>
                                                                </HStack>

                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>
                                                <VStack w={'30%'} bg={''} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'70%'} >
                                                                <Text>Roof Shape:</Text>
                                                            </VStack>
                                                            <VStack w={'30%'} >
                                                                <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                                    <option>Yes</option>

                                                                </Select>
                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>

                                            </HStack>
                                            <HStack bg={''} w={'100%'} >
                                                <VStack w={'70%'} bg={''} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'60%'} alignItems={'flex-start'}>
                                                                <Text>Plumbing Update:</Text>
                                                            </VStack>
                                                            <VStack w={'40%'} >
                                                                <HStack>
                                                                    <Select placeholder="No Update to this system" size='sm' borderRadius='5px' w={'70%'} >


                                                                    </Select>
                                                                    <Select placeholder="Select" size='sm' borderRadius='5px' w={'30%'}>


                                                                    </Select>
                                                                </HStack>
                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>
                                                <VStack w={'30%'} bg={''} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'70%'} >
                                                                <Text>Occupancy:</Text>
                                                            </VStack>
                                                            <VStack w={'30%'} >
                                                                <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                                    <option>Yes</option>

                                                                </Select>
                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>

                                            </HStack>

                                            <HStack bg={''} w={'100%'} >
                                                <VStack w={'70%'} bg={''} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'60%'} alignItems={'flex-start'}>
                                                                <Text>Roofing Update:</Text>
                                                            </VStack>
                                                            <VStack w={'40%'} >
                                                                <HStack>
                                                                    <Select placeholder="No Update to this system" size='sm' borderRadius='5px' w={'70%'} >


                                                                    </Select>
                                                                    <Select placeholder="Select" size='sm' borderRadius='5px' w={'30%'}>


                                                                    </Select>
                                                                </HStack>
                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>
                                                <VStack w={'30%'}>

                                                </VStack>

                                            </HStack>
                                            <HStack bg={''} w={'100%'} >
                                                <VStack w={'70%'} bg={''} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'60%'} alignItems={'flex-start'}>
                                                                <Text>HVAC Update:</Text>
                                                            </VStack>
                                                            <VStack w={'40%'} >
                                                                <HStack>
                                                                    <Select placeholder="No Update to this system" size='sm' borderRadius='5px' w={'70%'} >


                                                                    </Select>
                                                                    <Select placeholder="Select" size='sm' borderRadius='5px' w={'30%'}>


                                                                    </Select>
                                                                </HStack>
                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>
                                                <VStack w={'30%'}>

                                                </VStack>

                                            </HStack>
                                            <HStack bg={''} w={'100%'} >
                                                <VStack w={'70%'} bg={''} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'60%'} alignItems={'flex-start'}>
                                                                <Text>Other Update:</Text>
                                                            </VStack>
                                                            <VStack w={'40%'} >
                                                                <HStack>
                                                                    <Select placeholder="No Update to this system" size='sm' borderRadius='5px' w={'70%'} >


                                                                    </Select>
                                                                    <Select placeholder="Select" size='sm' borderRadius='5px' w={'30%'}>

                                                                    </Select>
                                                                </HStack>
                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>
                                                <VStack w={'30%'}>

                                                </VStack>

                                            </HStack>

                                            <HStack bg={''} w={'100%'} >
                                                <VStack w={'70%'} bg={''} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'60%'} alignItems={'flex-start'}>
                                                                <Text>Other Description:</Text>
                                                            </VStack>
                                                            <VStack w={'40%'} >
                                                                <HStack w={'100%'} >
                                                                    <Input placeholder="0" size='sm' borderRadius='5px' />
                                                                </HStack>
                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>
                                                <VStack w={'30%'}>

                                                </VStack>

                                            </HStack>
                                            <HStack justifyContent={'center'} w={'100%'} >
                                                <Text fontSize={'xl'} fontWeight={'bold'} p={3} >Property Coverage</Text>
                                            </HStack>
                                            <HStack pb={2}>
                                                <Text color={'gray'}>Wind for Location1 not available</Text>
                                            </HStack>
                                            <HStack w={'100%'} pb={1} >
                                                <VStack w={'15%'} >
                                                    <Text color={'gray'}>Coverage Type:</Text>
                                                </VStack>
                                                <VStack w={'60%'} >
                                                    <Text color={'gray'}>Basis:</Text>
                                                </VStack>
                                                <VStack w={'15%'} >
                                                    <Text color={'gray'}>AOP Deductible:</Text>
                                                </VStack>
                                            </HStack>
                                            <HStack w={'100%'} pb={1} >
                                                <VStack w={'15%'} >
                                                    <Select placeholder="Building" size='sm' borderRadius='5px'>

                                                    </Select>
                                                </VStack>
                                                <VStack w={'60%'} >
                                                    <Select placeholder="Renovation RCV 100% Coins/Existing Structure ACV-80%" size='sm' borderRadius='5px'  >

                                                    </Select>
                                                </VStack>
                                                <VStack w={'15%'} >
                                                    <Select placeholder="$1000" size='sm' borderRadius='5px'  >

                                                    </Select>
                                                </VStack>
                                            </HStack>
                                            <HStack w={'100%'} pt={2} alignItems={'flex-start'} >
                                                <VStack w={'30%'} >
                                                    <Text color={'gray'}>Revnovation Value:</Text>
                                                </VStack>
                                                <VStack w={'42%'} >
                                                    <Text color={'gray'}>Value of Existing Structure:</Text>
                                                </VStack>
                                                <VStack w={'42%'} >
                                                    <Text color={'gray'}>Wind & Hall:</Text>
                                                </VStack>
                                                <VStack w={'42%'} >
                                                    <Text color={'gray'}>Wind & Hall Deductible:</Text>
                                                </VStack>
                                            </HStack>
                                            <HStack w={'100%'} pt={1} alignItems={'flex-start'} >
                                                <VStack w={'30%'} >
                                                    <Input placeholder="0" size='sm' borderRadius='5px' />
                                                </VStack>
                                                <VStack w={'40%'} >
                                                    <Input placeholder="0" size='sm' borderRadius='5px' />
                                                </VStack>
                                                <VStack w={'40%'} >
                                                    <Select placeholder="NO" size='sm' borderRadius='5px'  >
                                                    </Select>
                                                </VStack>
                                                <VStack w={'40%'} >
                                                    <Input placeholder="N/A" size='sm' borderRadius='5px' />
                                                </VStack>
                                            </HStack>

                                            <HStack w={'40%'} pt={2}>
                                                <VStack w={'50%'} >
                                                    <Text color={'gray'}>Named From Excl:</Text>
                                                </VStack>
                                                <VStack w={'50%'} >
                                                    <Text color={'gray'}>Value of Existing Structure:</Text>
                                                </VStack>
                                            </HStack>
                                            <HStack w={'40%'} pt={2}>
                                                <VStack w={'50%'} >
                                                    <Checkbox ></Checkbox>
                                                </VStack>
                                                <VStack w={'50%'} >
                                                    <HStack>
                                                        <Text color={'gray'}>Wind:</Text>
                                                        <Input placeholder="0" size='sm' borderRadius='5px' />
                                                    </HStack>

                                                </VStack>
                                            </HStack>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem mt='2%'>
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Loss History
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack >
                                                <VStack w={'80%'} alignItems={'flex-start'}>
                                                    <Text>
                                                        Any losses whether or not paid by insurance,during the last 5 years,at the location?
                                                    </Text>
                                                </VStack>
                                                <VStack w={'20%'}>
                                                    <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                    </Select>
                                                </VStack>
                                            </HStack>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem mt='2%'>
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Lineholder/Mortgagee/Loss Payee
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack w={'50%'}>
                                                <VStack w={'50%'}>
                                                    <Text>Premium Escrowed</Text>
                                                </VStack>
                                                <VStack w={'50%'}>
                                                    <Select placeholder="Select" size='sm' borderRadius='5px'  >
                                                    </Select>
                                                </VStack>
                                            </HStack>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem mt='2%'>
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Customer Information
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack w={'100%'} alignItems={'flex-start'} >
                                                <VStack w={'40%'} >
                                                    <HStack pb={'3'}>
                                                        <Text fontWeight={'bold'}>Mailing Address</Text>
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} >
                                                            <Text color={'gray'}>Street:</Text>
                                                        </VStack>
                                                        <VStack w={'60%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                            <Input size='sm' borderRadius='5px' />
                                                        </VStack>
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} >
                                                            <Text color={'gray'}>City:</Text>
                                                        </VStack>
                                                        <VStack w={'60%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                        </VStack>
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} >
                                                            <Text color={'gray'}>State:</Text>
                                                        </VStack>
                                                        <VStack w={'60%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                        </VStack>
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} >
                                                            <Text color={'gray'}>Zip:</Text>
                                                        </VStack>
                                                        <HStack w={'60%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                            <Input size='sm' borderRadius='5px' />
                                                        </HStack>
                                                    </HStack>

                                                </VStack>
                                                <VStack w={'30%'}>
                                                    <HStack pb={'3'}>
                                                        <Text fontWeight={'bold'}>Phone Number</Text>
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} >
                                                            <Text color={'gray'}>Home:</Text>
                                                        </VStack>
                                                        <HStack w={'60%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                            <Input size='sm' borderRadius='5px' />
                                                            <Input size='sm' borderRadius='5px' />
                                                        </HStack>
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} >
                                                            <Text color={'gray'}>Work:</Text>
                                                        </VStack>
                                                        <HStack w={'60%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                            <Input size='sm' borderRadius='5px' />
                                                            <Input size='sm' borderRadius='5px' />
                                                        </HStack>
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} >
                                                            <Text color={'gray'}>Cell:</Text>
                                                        </VStack>
                                                        <HStack w={'60%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                            <Input size='sm' borderRadius='5px' />
                                                            <Input size='sm' borderRadius='5px' />
                                                        </HStack>
                                                    </HStack>
                                                </VStack>
                                                <VStack w={'30%'} h={'40%'} >
                                                    <HStack pb={'3'}>
                                                        <Text fontWeight={'bold'}>Insured Email for E-Signature</Text>
                                                    </HStack>
                                                    <HStack >
                                                        <Input size='sm' borderRadius='5px' />
                                                    </HStack>
                                                </VStack>
                                            </HStack>
                                            <HStack w={'60%'} p={5} >
                                                <VStack w={'30%'} >
                                                    <HStack pb={'3'}>
                                                        <Text color={'gray'} >Inspection Contact:</Text>
                                                    </HStack>
                                                    <HStack >
                                                        <Input size='sm' borderRadius='5px' />
                                                    </HStack>
                                                </VStack>
                                                <VStack w={'40%'}>
                                                    <HStack pb={'3'}>
                                                        <Text color={'gray'} >Phone:</Text>
                                                    </HStack>
                                                    <HStack >
                                                        <Input size='sm' borderRadius='5px' />
                                                        <Input size='sm' borderRadius='5px' />
                                                        <Input size='sm' borderRadius='5px' />
                                                    </HStack>
                                                </VStack>
                                                <VStack w={'30%'}>
                                                    <HStack pb={'3'}>
                                                        <Text color={'gray'} >E-mail address:</Text>
                                                    </HStack>
                                                    <HStack >
                                                        <Input size='sm' borderRadius='5px' />
                                                    </HStack>
                                                </VStack>
                                            </HStack>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem mt='2%'>
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Previous Insurance
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack w={'100%'} >
                                                <VStack w={'30%'} alignItems={'flex-start'}>
                                                    <HStack pb={3}>
                                                        <Text fontSize={'xl'} color={'blue'} >PIC 1</Text>
                                                        <Button colorScheme='blue' size='sm'>Add PIC +</Button>
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <Text>Line(s) of Coverage:</Text>
                                                    </HStack>
                                                    <HStack w={'100%'}>
                                                        <Select placeholder='Please Choose' size='sm' borderRadius='5px'>
                                                        </Select>
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <Text>Policy #</Text>
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <Input />
                                                    </HStack>
                                                </VStack>
                                                <VStack w={'50%'} pt={'5%'}>
                                                    <HStack w={'100%'} >
                                                        <Text>Company Name:</Text>
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <Input />
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'30%'} ><Text>Effective</Text></VStack>
                                                        <VStack w={'30%'}><Text>Expiration</Text></VStack>
                                                        <VStack w={'30%'}><Text>Premium Tool</Text></VStack>
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <Input />
                                                        <Input />
                                                        <Input />
                                                    </HStack>
                                                </VStack>
                                                <VStack w={'20%'} pb={'15%'}>

                                                    <Button colorScheme='blue' size='sm'>Delete</Button>

                                                </VStack>
                                            </HStack>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem mt='2%'>
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Additional Comments/Remarks
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack pb={3}>
                                                <Text color={'gray'} fontWeight={'bold'}>Agency Comments:</Text>
                                            </HStack>
                                            <Textarea />
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem mt='2%'>
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Notes
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack pb={3} pt={3}>
                                                <Text color={'gray'} fontWeight={'bold'}>Inspection Notes:</Text>
                                            </HStack>
                                            <Textarea />
                                            <HStack pb={3} pt={3}>
                                                <Text color={'gray'} fontWeight={'bold'}>Agency Notes:</Text>
                                            </HStack>
                                            <Textarea />
                                            <HStack pb={3} pt={3}>
                                                <Text color={'gray'} fontWeight={'bold'}>Appears on Quote from Notes:</Text>
                                            </HStack>
                                            <Textarea />
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem mt='2%'>
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Special Cit and Debits
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack w={'70%'} pb={2}>
                                                <VStack w={'50%'} alignItems={'flex-start'} >
                                                    <Text>Managment:</Text>
                                                </VStack>
                                                <VStack w={'50%'} >
                                                    <Select placeholder='0' size='sm' borderRadius='5px'>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'70%'} pb={2}>
                                                <VStack w={'50%'} alignItems={'flex-start'}>
                                                    <Text>Safety Programs:</Text>
                                                </VStack>
                                                <VStack w={'50%'} >
                                                    <Select placeholder='0' size='sm' borderRadius='5px'>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'70%'} pb={2}>
                                                <VStack w={'50%'} alignItems={'flex-start'} >
                                                    <Text>Special Characterstics:</Text>
                                                </VStack>
                                                <VStack w={'50%'} >
                                                    <Select placeholder='0' size='sm' borderRadius='5px'>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'70%'} pb={2}>
                                                <VStack w={'50%'} alignItems={'flex-start'}>
                                                    <Text>Supervision/Employees Experience:</Text>
                                                </VStack>
                                                <VStack w={'50%'} >
                                                    <Select placeholder='0' size='sm' borderRadius='5px'>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'70%'} pb={2}>
                                                <VStack w={'50%'} alignItems={'flex-start'}>
                                                    <Text>Min Premium Property Adj:</Text>
                                                </VStack>
                                                <VStack w={'50%'} >
                                                    <Input />
                                                </VStack>

                                            </HStack>
                                            <HStack w={'70%'} pb={2}>
                                                <VStack w={'50%'} alignItems={'flex-start'}>
                                                    <Text>Min Premium GL Adj:</Text>
                                                </VStack>
                                                <VStack w={'50%'} >
                                                    <Input />
                                                </VStack>

                                            </HStack>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>

                            </Box>
                            <Button bg='blue' size='md' color='white' width='30%'>
                                Continue
                            </Button>



                        </VStack>
                    </Box>

                </Flex>
            </Container>
        </>
    )
}

export default BuilderRisk