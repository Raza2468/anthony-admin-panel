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

function FlodGI() {
    return (
        <>

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

                            {/* <Box
                    h="60px" width="100%"
                    rounded='xl'
                    boxShadow='md'
                    backgroundColor='blue'
                    display='flex'
                    alignItem='center'
                    justifyContent='space-evenly'
                    >
                        <Center color='white' fontWeight='bold'cursor='pointer'  >
                       Hide All
                        </Center>

                    </Box> */}

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
                                    <AccordionItem mt="2%">
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
                                                            <HStack><Text>RnQuote </Text> <Select size='sm' borderRadius='5px'>
                                                                <option>Let system decide</option>
                                                                <option>Don't Send</option>
                                                                <option>Send </option>
                                                            </Select></HStack>
                                                            <HStack w='100%'><Text>Submission Status </Text> <Select size='sm' borderRadius='5px'>
                                                                <option value="724" selected="selected">-select-</option>
                                                                <option value="5680">Approved by Company</option>
                                                                <option value="5679">Approved by underwriter</option>
                                                                <option value="725">Binder Requested</option>
                                                                <option value="726">Bound Pending Company Approval</option>
                                                                <option value="727">Declined Binder</option>
                                                                <option value="5667">Declined-Company</option>
                                                                <option value="728">Declined Quote</option>
                                                                <option value="5673">Declined-agent</option>
                                                                <option value="5672">Declined-MGA</option>
                                                                <option value="729">Endorsement Pending</option>
                                                                <option value="5677">In Processing</option>
                                                                <option value="5676">No Response</option>
                                                                <option value="5674">Phone quote given</option>
                                                                <option value="730">Policy Sent</option>
                                                                <option value="5669">Question to agent</option>
                                                                <option value="5670">Question to company</option>
                                                                <option value="731">Quoted</option>
                                                                <option value="5671">Referred online</option>
                                                                <option value="732">Requesting from Agent</option>
                                                                <option value="733">Submitted to Company</option>
                                                                <option value="734">Submitted to UnderWriter</option>
                                                                <option value="5668">Waiting to review</option>
                                                                <option value="5675">Written</option>
                                                            </Select></HStack>
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
                                                            <Text w='420px'>No Loss or loss runs recived</Text>
                                                            <RadioGroup defaultValue='1'>
                                                                <HStack>
                                                                    <Radio value='1'>No </Radio>
                                                                    <Radio value='2'>Yes</Radio>
                                                                </HStack>
                                                            </RadioGroup>
                                                        </HStack>
                                                        <HStack>
                                                            <Text w='420px'>Payment Recived</Text>
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
                                                    <Text fontWeight="bold" mt="2%">Line: FLOOD</Text>
                                                </Box>
                                                <Box flex='1' bg='' ml='2%'>
                                                    <Heading size="32" textColor='black'>Status Quoto: 1/23/2023</Heading>
                                                    <FormControl isRequi mt='2%'>
                                                        <FormLabel textColor='black'>Term:</FormLabel>
                                                        <Select >
                                                            <option value="2996">1 month</option><option value="2997">2 months</option><option value="2998">3 months</option><option value="2999">4 months</option><option value="3000">5 months</option><option value="3001">6 months</option><option value="3002">7 months</option><option value="3003">8 months</option><option value="3004">9 months</option><option value="3005">10 months</option><option value="3006">11 months</option><option value="3007" selected="selected">12 months</option><option value="3008">13 months</option><option value="3009">14 months</option><option value="3010">15 months</option><option value="3011">16 months</option><option value="3012">17 months</option><option value="3013">18 months</option>
                                                        </Select>
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

                                    <AccordionItem mt="2%">
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
                                                    <Button colorScheme="blue" variant="solid" ml='60%'>
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

                                    <AccordionItem mt="2%">
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                 <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Location Eligibility
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack pb={1} h={'5%'} >
                                                <HStack w={'100%'}  >
                                                    <VStack w={'80%'} alignItems={'flex-start'}>
                                                        <Text>Is this building a stand alone
                                                            Excess Risk</Text>
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
                                                        <Text>Is the risk Pre-FIRM?</Text>
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
                                                        <Text>Are any of the building at this location built over a body of water?</Text>
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
                                                        <Text>Are any of the building at this location under construction,a mobile/prefabricated manufactured home?</Text>
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
                                                        <Text>Is this location in a CBRA V Zones or Non-NFIP Participating Zone?</Text>
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
                                                        <Text>Type pf entity</Text>
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
                                                        <Text>Applicant</Text>
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
                                                        <Text>Is the risk an oceanfront property, or located on a barrier island?</Text>
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
                                                        <Text>Is risk eligible for a NFIP quote?</Text>
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
                                                        <Text>Is the property currently grandfathered into it's existing flood zone?</Text>
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

                                    <AccordionItem mt="2%">
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                 <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Location Information & Coverages
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
                                                            <Text>Street Address 1</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Street Address 2</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>City</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>State</Text>
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
                                                            <Text>Zip Code</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Input size='sm' borderRadius='5px' />


                                                        </VStack>

                                                    </HStack>


                                                </VStack>
                                                <VStack w={'50%'} alignItems={'flex-end'} h={'100%'} >
                                                    <HStack >
                                                        <Button colorScheme='blue' size='sm'>Delete Location</Button>
                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Country</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select placeholder="-select-" size='sm' borderRadius='5px'  >
                                                                <option>Yes</option>
                                                                <option>No</option>
                                                            </Select>
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Distance to Coast</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select placeholder="-select-" size='sm' borderRadius='5px'  >
                                                                <option>Yes</option>
                                                                <option>No</option>
                                                            </Select>
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Flood Zone</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select placeholder="-????-" size='sm' borderRadius='5px'  >
                                                                <option>Yes</option>
                                                                <option>No</option>
                                                            </Select>
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>True DTC</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Units</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <HStack>
                                                                <Radio>miles</Radio>
                                                                <Radio>feet</Radio></HStack>
                                                        </VStack>

                                                    </HStack>


                                                </VStack>
                                            </HStack>

                                            <HStack w={'100%'} p={4} >
                                                <HStack w={'10%'} >
                                                    <Text >MGA Credits:</Text>
                                                </HStack>
                                                <HStack w={'25%'} >
                                                    <Text >Primary</Text>
                                                    <Input size='sm' borderRadius='5px' />
                                                </HStack>
                                                <HStack w={'25%'} >
                                                    <Text >Excess</Text>
                                                    <Input size='sm' borderRadius='5px' />
                                                </HStack>
                                                <HStack w={'35%'} >
                                                    <Text >Negative A/V Zone
                                                    </Text>
                                                    <Input size='sm' borderRadius='5px' w={'40%'} />
                                                </HStack>

                                            </HStack>
                                            {/* <HStack bg={'.100'} pt={1} > */}
                                            <HStack justifyContent={'center'} w={'100%'} >
                                                <Text fontSize={'xl'} fontWeight={'bold'} pt={5} pb={3}>Verify by Map Risk</Text>
                                            </HStack>
                                            <HStack p={4} >
                                                <HStack w={'35%'} >
                                                    <Text>Base Flood Elevation</Text>
                                                    <Input size='sm' borderRadius='5px' w={'40%'} />
                                                </HStack>
                                                <HStack w={'30%'} >
                                                    <Text>Lowest Floor Elevation</Text>
                                                    <Input size='sm' borderRadius='5px' w={'40%'} />
                                                </HStack>
                                                <HStack w={'35%'} >
                                                    <Text>Elevation</Text>
                                                    <Input size='sm' borderRadius='5px' w={'60%'} />
                                                </HStack>

                                            </HStack>
                                            <HStack p={4} >
                                                <HStack w={'35%'} >
                                                    <Text>Primary TIV</Text>
                                                    <Input size='sm' borderRadius='5px' w={'70%'} />
                                                </HStack>
                                                <HStack w={'30%'} >
                                                    <Text>Excess TIV
                                                    </Text>
                                                    <Input size='sm' borderRadius='5px' w={'70%'} />
                                                </HStack>
                                                <HStack w={'35%'} >
                                                    <Text>TIV</Text>
                                                    <Input size='sm' borderRadius='5px' w={'72%'} />
                                                </HStack>

                                            </HStack>

                                            <HStack h={'40vh'} >
                                                <VStack w={'40%'}  >
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} alignItems={'flex-start'}>
                                                            <Text>Number of stories</Text>
                                                        </VStack>
                                                        <VStack w={'60%'} >
                                                            <Select placeholder="-select-" size='sm' borderRadius='5px' w={'60%'} >
                                                                <option>Yes</option>
                                                                <option>No</option>
                                                            </Select>
                                                        </VStack>
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} alignItems={'flex-start'}>
                                                            <Text>Construction Type</Text>
                                                        </VStack>
                                                        <VStack w={'60%'} >
                                                            <Select placeholder="-select-" size='sm' borderRadius='5px' w={'60%'} >
                                                                <option>Yes</option>
                                                                <option>No</option>
                                                            </Select>
                                                        </VStack>
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} alignItems={'flex-start'}>
                                                            <Text>Square Feet</Text>
                                                        </VStack>
                                                        <VStack w={'60%'} >
                                                            <Input size='sm' borderRadius='5px' w={'60%'} />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} alignItems={'flex-start'}>
                                                            <Text>Total Building Limit </Text>
                                                        </VStack>
                                                        <VStack w={'60%'} >
                                                            <Input size='sm' borderRadius='5px' w={'60%'} />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'30%'} alignItems={'flex-start'}>
                                                            <Text></Text>
                                                        </VStack>
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>(Primary: $0.00;Excess $0.00)</Text>
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} alignItems={'flex-start'}>
                                                            <Text>Building Replacement Cost</Text>
                                                        </VStack>
                                                        <VStack w={'60%'} >
                                                            <Input size='sm' borderRadius='5px' w={'60%'} />
                                                        </VStack>

                                                    </HStack>

                                                </VStack>
                                                <VStack w={'60%'} >
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} alignItems={'flex-start'}>
                                                            <Text>Occupancy</Text>
                                                        </VStack>
                                                        <VStack w={'60%'} >
                                                            <Select placeholder="-select-" size='sm' borderRadius='5px' w={'60%'} >
                                                                <option>Yes</option>
                                                                <option>No</option>
                                                            </Select>
                                                        </VStack>
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} alignItems={'flex-start'}>
                                                            <Text>Building Vacancy </Text>
                                                        </VStack>
                                                        <VStack w={'60%'} >
                                                            <Select placeholder="-select-" size='sm' borderRadius='5px' w={'60%'} >
                                                                <option>Yes</option>
                                                                <option>No</option>
                                                            </Select>
                                                        </VStack>
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} alignItems={'flex-start'}>
                                                            <Text> Year Built</Text>
                                                        </VStack>
                                                        <VStack w={'60%'} >
                                                            <Input size='sm' borderRadius='5px' w={'60%'} />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} alignItems={'flex-start'}>
                                                            <Text>Overall Contents & BI or ALE Limit</Text>
                                                        </VStack>
                                                        <VStack w={'60%'} >
                                                            <Input size='sm' borderRadius='5px' w={'60%'} />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack alignItems={'flex-start'}>
                                                            <Text>(Primary: $0.00;Primary BI:$0.00;Primary ALE: $0.00; Excess: $0.00)</Text>
                                                        </VStack>
                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} alignItems={'flex-start'}>
                                                            <Text>Primary Business Income Limit</Text>
                                                        </VStack>
                                                        <VStack w={'60%'} >
                                                            <Input size='sm' borderRadius='5px' w={'60%'} />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} >
                                                        <VStack w={'40%'} alignItems={'flex-start'}>
                                                            <Text>Primary Additional Living Expense Limit</Text>
                                                        </VStack>
                                                        <VStack w={'60%'} >
                                                            <Input size='sm' borderRadius='5px' w={'60%'} />
                                                        </VStack>

                                                    </HStack>

                                                </VStack>


                                            </HStack>



                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem mt="2%">
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
                                                    <Select placeholder="-????-" size='sm' borderRadius='5px'  >
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </VStack>
                                            </HStack>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem mt="2%">
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

                                    <AccordionItem mt="2%">
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                 <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Previous Insurance Coverages
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
                                    <AccordionItem mt="2%">
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
                                    <AccordionItem mt="2%">
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

export default FlodGI