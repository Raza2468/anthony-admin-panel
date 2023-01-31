
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

// import Header from '../../Header/Header'

function APD() {
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

                            {/* <Box
                                h="60px" width="100%"
                                rounded='xl'
                                boxShadow='md'
                                backgroundColor='#F6F6F6'
                                display='flex'
                                alignItem='center'
                                justifyContent='space-evenly'
                            >
                                <Center color='gray' fontWeight='400' cursor='pointer' >
                                    Qview
                                </Center>
                                <Center color='gray' fontWeight='400' cursor='pointer' >
                                    Trucking
                                </Center>
                                <Center color='gray' fontWeight='400' cursor='pointer' >
                                    Premium
                                </Center>
                                <Center color='gray' fontWeight='400' cursor='pointer' >
                                    Notes
                                </Center>
                                <Center color='gray' fontWeight='400' cursor='pointer' >
                                    Dairy
                                </Center>
                                <Center color='gray' fontWeight='400' cursor='pointer'  >
                                    Memos
                                </Center>
                                <Center color='gray' fontWeight='400' cursor='pointer' >
                                    History
                                </Center>
                                <Center color='gray' fontWeight='400' cursor='pointer' >
                                    Save
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
                                                <Box as="span" flex='1' textAlign='center'  >
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
                                                                Approval Roo!
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
                                                            <HStack w='100%'><Text>Submission Status :</Text>  <Select size='sm' borderRadius='5px'>
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
                                                            <Select >
                                                                <option value="20999">-Lois  Woods</option><option value="23669">1 OAK INSURANCE AGENCY ,LLC-JOAO PAULO  COSTA-GOULART</option><option value="3502">1Source Insurance Agency-Afshin  Sheibani</option><option value="3917">1st Advantage Insurance Inc-Agnes  Brockus</option><option value="5830">1st Capital Insurance-Jon  Allen</option><option value="3087">1st Capital Insurance-Mark  Allen</option><option value="3084">1st Capital Insurance-Jack  Christie</option><option value="3088">1st Capital Insurance-Kenlyn  Gordon</option><option value="18598">1st Capital Insurance-Thaddeus  McCullough II</option><option value="3085">1st Capital Insurance-David  Pooser</option><option value="5831">1st Capital Insurance-Kane  Sanders</option><option value="3086">1st Capital Insurance-Billy  Swails</option><option value="819">1st Southern Ins Services-Fran  Pless</option><option value="4474">4 Corners Insurance-Jaime  Austin</option><option value="4473">4 Corners Insurance-Michael  Palanti</option><option value="1471">413 Insurance Services-Brad  Wiehe</option><option value="24536">4th Street Insurance Professionals Inc-Rebecca  Launchi</option><option value="22231">925 PARTNERS LLC-BLAKE  RHODES</option><option value="22282">925 Partners LLC-Blake  Rhodes</option><option value="22770">A &amp; A Insurance Services Int Inc-Megan  Luchey</option><option value="23849">A &amp; A Priority Insurance-Claudia  Tallon</option><option value="24421">A &amp; B Insurance Agency Inc-Lonnie  Lynch</option><option value="24420">A &amp; B Insurance Agency Inc-Diane M Tait</option><option value="18968">A &amp; J GEORGIA SERVICES INC-ALBA  BENJUMEA</option><option value="838">A 1 Insurance Sales-Scott  Mitchell</option><option value="21031">A 2 Z INSURANCE SERVICE INC-CLIFFORD  MITCHELL</option><option value="21030">A 2 Z INSURANCE SERVICE INC-SUSAN  SERRA</option><option value="24492">A Advantage Insurance Group LLC-Cindy Jo  McCall</option><option value="24490">A Advantage Insurance Group LLC-Tenille  Perry</option><option value="24491">A Advantage Insurance Group LLC-Ruth Delana  Rollins</option><option value="3537">A Bondura, Inc.-Aleta  Essa</option><option value="3536">A Bondura, Inc.-Michael  Essa</option><option value="4734">A Bondura, Inc.-Mike  Essa Jr</option><option value="1470">A C Insurance Inc-Valerie  Glisson</option><option value="1641">A J LUPAS INSURANCE AGENCY-JERRY  LUPAS</option><option value="2136">A P Orleans Agency-Anthony  DiIenno</option><option value="2137">A P Orleans Agency-Bert  Forman</option><option value="6327">A Plus Insurance Services Inc-Jennifer  Edgar</option><option value="3233">A Plus Insurance Services Inc-Donald  Petsinger</option><option value="443">A to Z Insurance Agency-Michael  Tillman</option><option value="24020">A to Z Insurance Agency, LLC-ARGETIM  ZHUTA</option><option value="22490">A&amp;C INSURANCE LLC DBA PROTECTIVE CHOICE INSURANCE-AMANDA  BARTLETT</option><option value="5832">A&amp;M Insurance Agency LLC-Aaron  Dorfman</option><option value="4314">A+ American Casualty Insurance Inc.-Marissa  Hernandez</option><option value="4312">A+ American Casualty Insurance Inc.-Caroline  Marciano</option><option value="3121">A+ American Casualty Insurance Inc.-Christine  Markey</option><option value="4313">A+ American Casualty Insurance Inc.-Beatriz  Velasco</option><option value="4994">A+ Deerfield Insurance, Inc.-Alexis  Jezercak</option><option value="4993">A+ Deerfield Insurance, Inc.-Anita  Jezercak</option><option value="4992">A+ Deerfield Insurance, Inc.-Gail  Randell</option><option value="20430">A-1 AUTO INSURANCE ll-CINDY  FIGUEROA</option><option value="448">A-1 Insurance-Judy  Pugh</option><option value="16080">A. FAZIO INC-DEBORAH  ANDREASEN</option><option value="16076">A. FAZIO INC-MICHAEL  FAZIO</option><option value="16078">A. FAZIO INC-PAUL  FAZIO</option><option value="16077">A. FAZIO INC-STEPHEN  FAZIO</option><option value="16079">A. FAZIO INC-MARY  LERNER</option><option value="16075">A. FAZIO INC-STEVE  POZZI</option><option value="341">A.K. Insurance Agency-Alex  Kharazmi</option><option value="4412">AA Armstrong Insurance LLC-Sheena  Joyce</option><option value="24463">Aaron Grob Agency Inc-AARON  GROB</option><option value="22877">Aaron L Grober Agency-Aaron  Grober</option><option value="22042">ABACOA INSURANCE GROUP, INC.-KATHLEEN  BETANCOURT</option><option value="22043">ABACOA INSURANCE GROUP, INC.-JESSICA  ROTHAN</option><option value="1182">ABBA Ins Agency-Chris  Dunegan</option><option value="658">ABBA Ins Agency-Sandra  Dunegan</option><option value="1301">Abbott Insurance-D  Ibender</option><option value="361">Abbott Insurance-Elizabeth  Mundell</option><option value="22317">ABBOTT INSURANCE, INC-AMY  KOVARIK</option><option value="22315">ABBOTT INSURANCE, INC-DANIELLE  MCDOWELL</option><option value="22316">ABBOTT INSURANCE, INC-KATE  MOFFETT</option><option value="344">ABC Casualty, Inc.-Jonathan  Rodrigize</option><option value="1390">Aberdeen Insurance Group-Wes  Sheffield</option><option value="2275">ABHT Inc-Angie M Batten</option><option value="23139">ABIDE AGENCY-STEVEN W CHESNUT</option><option value="23141">ABIDE AGENCY-KRISTA  HOFFMAN</option><option value="23140">ABIDE AGENCY-CAROL D MINCHEFF</option><option value="22607">Able Best Agency Inc-Amanda  Kimmel</option><option value="21631">Abney Insurance Agency-Aaron  Abney</option><option value="21632">Abney Insurance Agency-Brandon  Abney</option><option value="21634">Abney Insurance Agency-Curtis  Abney</option><option value="21630">Abney Insurance Agency-Paula  Abney</option><option value="21636">Abney Insurance Agency-Jerica  Hendren</option><option value="21633">Abney Insurance Agency-Claudia  Roberts</option><option value="21635">Abney Insurance Agency-Monica  Thilmony</option><option value="21142">Abora Insurance Group LLC dba Insurance Zone-JOE  CAPERS</option><option value="21141">Abora Insurance Group LLC dba Insurance Zone-LEA  CAPERS</option><option value="24467">Abora Insurance Group LLC dba Insurance Zone-ANTHONY  RICCARD</option><option value="24482">Abora Insurance Group LLC dba Insurance Zone-APRIL M WALTERS</option><option value="18397">Abri Insurance LLC-Angela  Herndon</option><option value="18396">Abri Insurance LLC-Thuy  Patterson</option><option value="18398">Abri Insurance LLC-David  Seithel</option><option value="23542">Absolute Insurance Agency LLC-Kirk  Hargis</option><option value="5494">Absolute Insurance Agency LLC-Kristi  Kalberer</option><option value="23073">Absolute Insurance Inc-Miika  Makila</option><option value="24157">ABSOLUTE RISK SERVICES, INC-Daniel W. Browne</option><option value="18601">ABSTRACT INSURANCE AGENCY LLC-CHRISTINE  ONATIVIA</option><option value="1506">ABT Insurance Services Inc-KAREN  WOWK</option><option value="677">Abundant Insurance Agency-Chris  Westhersby</option><option value="22764">Academy Insurance Agency Inc-Christopher  Pollzzie</option><option value="4102">Academy Insurance Agency, Inc.-Kimberley  Brito</option><option value="4100">Academy Insurance Agency, Inc.-William  Mahler</option><option value="4101">Academy Insurance Agency, Inc.-James  Silvertooth</option><option value="4757">Accent Brokers Inc-Carla  Bossen</option><option value="4756">Accent Brokers Inc-Daniela  Ochoa</option><option value="24108">Access Insurance Group-Brad  Sklarchuk</option><option value="20883">Access Insurance Group Inc-Barbara  Eljaua</option><option value="24014">Access Insurance Group Inc-Laura  Flanagan</option><option value="24011">Access Insurance Group Inc-Marlene  Lopez</option><option value="24012">Access Insurance Group Inc-Yarima  Reve Rivero</option><option value="24013">Access Insurance Group Inc-Gema  Rizo</option><option value="3313">Access Insurance Underwriter LLC-Hector  Calzadilla</option><option value="3312">Access Insurance Underwriter LLC-Andrew  Ehilinger</option><option value="3309">Access Insurance Underwriter LLC-Glenroy  Harper</option><option value="3311">Access Insurance Underwriter LLC-Jared  Mancil</option><option value="3310">Access Insurance Underwriter LLC-Christian  Proano</option><option value="20531">Access Insurance Underwriter LLC-Damion  Supersaad</option><option value="3308">Access Insurance Underwriter LLC-Phillip  Wardell</option><option value="21456">Accessible Insurance Agency Inc-Danielle  Dauzat</option><option value="3235">ACCH Insurance Agency LLC-Ang...</option>

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
                                    <AccordionItem mt="2%">
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                  <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Underwritting Details
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack pb={3} pt={3}>

                                                <VStack w={'40%'} >
                                                    <HStack w={'100%'} >
                                                        <Text>Year Established</Text>
                                                        <Select w={'60%'} >
                                                            <option value="2" selected="selected">-----???-----</option>
                                                            <option value="2024">2024</option><option value="2023">2023</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="3">Prior to 1990</option>
                                                        </Select>
                                                    </HStack>
                                                </VStack>

                                                <VStack w={'30%'} >
                                                    <HStack w={'100%'} >
                                                        <Text>US DOT NUM</Text>
                                                        <Input w={'60%'} />
                                                    </HStack>
                                                </VStack>

                                                <VStack w={'25%'}>
                                                    <HStack w={'100%'} >
                                                        <Text>MC DOCKET NUMBER</Text>
                                                        <Input w={'30%'} />
                                                    </HStack>
                                                </VStack>

                                            </HStack>
                                            <HStack pb={3} pt={3}>

                                                <VStack w={'40%'} >
                                                    <HStack w={'100%'} >
                                                        <Text>No of Drivers</Text>
                                                        <Input w={'60%'} />
                                                    </HStack>
                                                </VStack>

                                                <VStack w={'50%'} >
                                                    <HStack w={'100%'} >
                                                        <Text>Insured Gross Receipts</Text>
                                                        <Input w={'50%'} />
                                                    </HStack>
                                                </VStack>


                                            </HStack>
                                            <HStack pb={3} pt={3}>

                                                <VStack w={'100%'} >
                                                    <HStack w={'100%'}>
                                                        <Text>Is Trailer Interchange Coverage Requied?</Text>
                                                        <Select w={'60%'} >
                                                            <option></option>
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </Select>
                                                    </HStack>
                                                </VStack>

                                            </HStack>
                                            <HStack pb={3} pt={3}>
                                                <Text color={'gray'} fontWeight={'bold'}>Subjectives Low(Logs):</Text>
                                            </HStack>
                                            <Textarea placeholder='None other than those contained with in the Wording' />
                                            <HStack pb={3} pt={3}>
                                                <Text color={'gray'} fontWeight={'bold'}>Conditions Precidents(Logs):</Text>
                                            </HStack>
                                            <Textarea placeholder='None other than those contained with in the Wording' />
                                            <HStack pb={3} pt={3}>
                                                <Text color={'gray'} fontWeight={'bold'}>Express Warranties(Logs):</Text>
                                            </HStack>
                                            <Textarea placeholder='None other than those contained with in the Wording' />
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem mt="2%">
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                  <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Commodites
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack pb={1} h={'5%'} >
                                                <HStack w={'100%'}  >
                                                    <HStack w={'50%'} >
                                                        <Text fontSize={'xl'} color={'blue'} >Commodites 1</Text>
                                                        <Button colorScheme='blue' size='sm'>Add Commodites +</Button>
                                                    </HStack>
                                                    <HStack w={'50%'} justifyContent={'end'}>
                                                        <Button colorScheme='blue' size='sm'>Delete Commodites</Button>
                                                    </HStack>
                                                </HStack>

                                            </HStack>
                                            <HStack pt={2}>
                                                <HStack w={'50%'} >
                                                    <Text w={'40%'} >Commodites Hauled</Text>
                                                    <Select w={'60%'} >
                                                        <option value="13730" selected="selected">-----???-----</option><option value="13731">Alcohol, Beer, Wine &amp; Tobacco</option><option value="13732">Autos, Motor Cycles, (no New Auto Valuation)</option><option value="13733">Autos, Motor Cycles, (with  Optional Endorsement 20: New Auto Valuation)</option><option value="14829">Building Materials</option><option value="13734">Bulk Agricultural</option><option value="13735">Containerized / Dry Van Freight (not alcohol, garments, electronics)</option><option value="13736">Cotton, Iron &amp; Steel, Flatbed commodities</option><option value="13737">Electronics</option><option value="13738">Garbage or Waste Haulers</option><option value="13739">Garments &amp; Textiles</option><option value="13740">Heavy machinery, printing presses, switchgear, Oversized Loads</option><option value="13741">Household removers</option><option value="13742">Liquids &amp; Petroleum</option><option value="13743">Livestock Haulers</option><option value="13744">Log Haulers</option><option value="13745">Mobile Home Haulers</option><option value="14828">Paper/Plastics</option><option value="13746">Perfume &amp; Cosmetics</option><option value="13747">Refrigerated commodities excluding Seafood</option><option value="13748">Sand and Gravel Haulers</option><option value="13749">Seafood</option><option value="13750">Tanker Haulers</option><option value="13751">Tires, Auto Parts</option><option value="13752">Tow Trucks or On-Hook</option><option value="13753">Other</option>
                                                    </Select>
                                                </HStack>
                                                <HStack w={'50%'} >
                                                    <Text w={'40%'} >Percentage</Text>
                                                    <Input w={'50%'} />
                                                </HStack>

                                            </HStack>
                                            <HStack pt={2}>
                                                <HStack w={'35%'} >
                                                    <Text w={'40%'} >Average Value</Text>
                                                    <Input w={'50%'} />
                                                </HStack>
                                                <HStack w={'45%'} >
                                                    <Text w={'40%'} >Maximum Value</Text>
                                                    <Select w={'60%'} >
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </HStack>
                                                <HStack w={'20%'} pt={8} display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
                                                    <Text w={'40%'} >Min Ded</Text>
                                                    <Text w={'40%'} >test111</Text>

                                                </HStack>

                                            </HStack>






                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem mt="2%">
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                  <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Schedule
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack w={'100%'} pb={2}>
                                                <HStack w={'50%'}>
                                                    <Text fontSize={'xl'} color={'blue'} >Schedule 1</Text>
                                                    <Button colorScheme='blue' size='sm'>Add Schedule +</Button>
                                                </HStack>
                                                <HStack w={'50%'} justifyContent={'flex-end'}>
                                                    <Button colorScheme='blue' size='sm'>Delete Schedule </Button>
                                                </HStack>
                                            </HStack>
                                            <HStack w={'100%'} >
                                                <VStack w={'50%'} alignItems={'flex-start'} h={'100%'}>


                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Model Year:</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select placeholder="Special" size='sm' borderRadius='5px'  >
                                                                <option value="0" selected="selected">--???--</option><option value="2024">2024</option><option value="2023">2023</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option>
                                                            </Select>
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Make:</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Input size='sm' borderRadius='5px' />


                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Type</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select size='sm' borderRadius='5px'  >
                                                                <option value="13754" selected="selected">-----???-----</option><optgroup label="TRACTORS"><option value="13755">Tractor Unit</option><option value="13756">Straight Truck</option><option value="13757">Reefer Truck</option><option value="13758">Tank Truck</option><option value="13759">Pickup Truck</option><option value="13760">Other power unit</option></optgroup><optgroup label="TRAILERS"><option value="13761">Reefer Trailer</option><option value="13762">Auto carrying trailer</option><option value="13763">Flat bed trailer</option><option value="13764">Tank trailer</option><option value="13765">Other trailer</option></optgroup>
                                                            </Select>
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Vehicle Identity</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Input size='sm' borderRadius='5px' />
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Actual Cash Value</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Input size='sm' borderRadius='5px' />


                                                        </VStack>

                                                    </HStack>





                                                </VStack>

                                            </HStack>








                                            <HStack w={'100%'} pt={2}  >
                                                <VStack w={'70%'}>
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'40%'} alignItems={'flex-start'}>
                                                                <Text>Non-owned or non-insured Auto?</Text>
                                                            </VStack>
                                                            <VStack w={'22%'} >
                                                                <Checkbox></Checkbox>
                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'100%'} alignItems={'flex-start'} >
                                                                <Button colorScheme='blue'>Step 1-Schedule Upload File</Button>
                                                            </VStack>
                                                        </HStack>


                                                    </HStack>
                                                </VStack>


                                            </HStack>
                                            <HStack bg={''} w={'100%'} pt={2} >
                                                <VStack w={'58%'} bg={''} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'60%'} alignItems={'flex-start'}>
                                                                <Text>Number Power Units:</Text>
                                                            </VStack>
                                                            <VStack w={'25%'} >
                                                                <HStack>
                                                                    <Input size='sm' borderRadius='5px' />

                                                                </HStack>

                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>


                                            </HStack>
                                            <HStack bg={''} w={'100%'} pt={2}>
                                                <VStack w={'58%'} bg={''} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'60%'} alignItems={'flex-start'}>
                                                                <Text>Number Trailers:</Text>
                                                            </VStack>
                                                            <VStack w={'25%'} >
                                                                <HStack>
                                                                    <Input size='sm' borderRadius='5px' />

                                                                </HStack>

                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>


                                            </HStack>

                                            <HStack bg={''} w={'100%'} pt={2}>
                                                <VStack w={'58%'} bg={''} >
                                                    <HStack pb={1} h={'5%'} w={'100%'}  >
                                                        <HStack w={'100%'}  >
                                                            <VStack w={'60%'} alignItems={'flex-start'}>
                                                                <Text>Total Schedule Value:</Text>
                                                            </VStack>
                                                            <VStack w={'25%'} >
                                                                <HStack>
                                                                    <Input size='sm' borderRadius='5px' />

                                                                </HStack>

                                                            </VStack>

                                                        </HStack>


                                                    </HStack>
                                                </VStack>


                                            </HStack>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem mt="2%">
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                  <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Sums Insured/Total Insured Value
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack w={'70%'} pb={2}>
                                                <VStack w={'50%'} alignItems={'flex-start'}>
                                                    <Text>Any One Unit:</Text>
                                                </VStack>
                                                <VStack w={'50%'} >
                                                    <Input size='sm' borderRadius='5px' />

                                                </VStack>

                                            </HStack>
                                            <HStack w={'70%'} pb={2}>
                                                <VStack w={'50%'} alignItems={'flex-start'}>
                                                    <Text>Any One Combination:</Text>
                                                </VStack>
                                                <VStack w={'50%'} >
                                                    <Input />
                                                </VStack>

                                            </HStack>
                                            <HStack w={'70%'} pb={2}>
                                                <VStack w={'50%'} alignItems={'flex-start'}>
                                                    <Text>Any One Loss:</Text>
                                                </VStack>
                                                <VStack w={'50%'} >
                                                    <Input />
                                                </VStack>

                                            </HStack>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem mt="2%">
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                  <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Premium Option
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack w={'70%'} pb={2}>
                                                <VStack w={'50%'} alignItems={'flex-start'}>
                                                    <Text>Physical Damage</Text>
                                                </VStack>


                                            </HStack>
                                            <HStack w={'70%'} pb={2}>
                                                <VStack w={'50%'} alignItems={'flex-start'}>
                                                    <Text>Deductable:</Text>
                                                </VStack>
                                                <VStack w={'50%'} >
                                                    <Select placeholder='-????-' size='sm' borderRadius='5px'>
                                                        <option>$1,000</option>
                                                        <option>$2,000</option>
                                                        <option>$3,000</option>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'70%'} pb={2}>
                                                <VStack w={'50%'} alignItems={'flex-start'}>
                                                    <Text>APD Credit/Debit:</Text>
                                                </VStack>
                                                <VStack w={'50%'} >
                                                    <Input />
                                                </VStack>

                                            </HStack>
                                            <HStack w={'70%'} pb={2}>
                                                <VStack w={'50%'} alignItems={'flex-start'}>
                                                    <Text>APD Manual ADJ:</Text>
                                                </VStack>
                                                <VStack w={'50%'} >
                                                    <Input />
                                                </VStack>

                                            </HStack>
                                            <HStack w={'70%'} pb={2}>
                                                <VStack w={'50%'} alignItems={'flex-start'}>
                                                    <Text>Manual APD Deductable:</Text>
                                                </VStack>
                                                <VStack>
                                                    <Checkbox></Checkbox>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'70%'} pb={2}>
                                                <VStack w={'50%'} alignItems={'flex-start'}>
                                                    <Text>Wavy Policy Fee:</Text>
                                                </VStack>
                                                <VStack w={'50%'} >
                                                    <Select>
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
                                                    Optional Coverages Ap
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>

                                            <HStack w={'100%'} >
                                                <VStack w={'50%'} alignItems={'flex-start'} h={'100%'}>


                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>ProtectionOf Salvage Increase Expense Endorsement:</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select placeholder="-????-" size='sm' borderRadius='5px'  >
                                                                <option>Not INCLUDED</option>
                                                                <option>INCLUDED</option>
                                                            </Select>
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Protection of Salvage Inc Incl Towing & Storage:</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select placeholder="-????-" size='sm' borderRadius='5px'  >
                                                                <option>Not INCLUDED</option>
                                                                <option>INCLUDED</option>
                                                            </Select>


                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Lease Gap Coverage</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select placeholder="-????-" size='sm' borderRadius='5px'  >
                                                                <option>Not INCLUDED</option>
                                                                <option>INCLUDED</option>
                                                            </Select>
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Downtime Rental:</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select placeholder="-????-" size='sm' borderRadius='5px'  >
                                                                <option>Not INCLUDED</option>
                                                                <option>INCLUDED</option>
                                                            </Select>
                                                        </VStack>

                                                    </HStack>
                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Radius of Limitation Endorsement ?</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select placeholder=" " size='sm' borderRadius='5px'  >
                                                                <option value="13788" selected="selected">-----???-----</option><option value="13789">Not Included</option><option value="13790">Included - 10 Mi</option><option value="13877">Included - 20 Mi</option><option value="13878">Included - 30 Mi</option><option value="13879">Included - 40 Mi</option><option value="13880">Included - 50 Mi</option>
                                                            </Select>
                                                        </VStack>

                                                    </HStack>

                                                    <HStack w={'100%'} pb={1} >
                                                        <VStack w={'70%'} alignItems={'flex-start'}>
                                                            <Text>Debris Removal Limit Increase</Text>
                                                        </VStack>
                                                        <VStack w={'30%'} >
                                                            <Select placeholder="Not Include" size='sm' borderRadius='5px' />

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
                                                    Additional Insured
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack w={'100%'} justifyContent={'center'}>
                                                <Button colorScheme={'blue'} >
                                                    Click here to add Additional Interest,etc
                                                </Button>
                                            </HStack>
                                        </AccordionPanel>
                                    </AccordionItem>



                                    <AccordionItem mt="2%">
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                  <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Underwriting Questions
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <HStack p={2} w={'100%'} justifyContent={'flex-end'}>
                                                <Button colorScheme={'blue'}>Tick Yes to all</Button>
                                            </HStack>
                                            <HStack w={'100%'} pb={2}>
                                                <VStack w={'70%'} alignItems={'flex-start'} >
                                                    <Text>Do all drivers meet the driver criteria :</Text>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <Select placeholder='-????-' size='sm' borderRadius='5px'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'100%'} pb={2}>
                                                <VStack w={'70%'} alignItems={'flex-start'}>
                                                    <Text>Is there a Formal Driver Training Program in Place?</Text>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <Select placeholder='-????-' size='sm' borderRadius='5px'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'100%'} pb={2}>
                                                <VStack w={'70%'} alignItems={'flex-start'} >
                                                    <Text>Are all vehicles locked and alarmed when unattended?</Text>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <Select placeholder='-????-' size='sm' borderRadius='5px'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'100%'} pb={2}>
                                                <VStack w={'70%'} alignItems={'flex-start'}>
                                                    <Text>Is there any Associated or Subsidiary Companies to be included?</Text>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <Select placeholder='-????-' size='sm' borderRadius='5px'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack p={2} w={'100%'} justifyContent={'flex-end'}>
                                                <Button colorScheme={'blue'}>Tick No to all</Button>
                                            </HStack>
                                            <HStack w={'100%'} pb={2}>
                                                <VStack w={'70%'} alignItems={'flex-start'}>
                                                    <Text>Do you haul trailers attached in tandem and or super  B's and B'trains ?</Text>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <Select placeholder='-????-' size='sm' borderRadius='5px'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'100%'} pb={2}>
                                                <VStack w={'70%'} alignItems={'flex-start'}>
                                                    <Text>Is Coverage in Alaska Required ?</Text>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <Select placeholder='-????-' size='sm' borderRadius='5px'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'100%'} pb={2}>
                                                <VStack w={'70%'} alignItems={'flex-start'}>
                                                    <Text>Is Coverage in Mexico Required ?</Text>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <Select placeholder='-????-' size='sm' borderRadius='5px'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'100%'} pb={2}>
                                                <VStack w={'70%'} alignItems={'flex-start'}>
                                                    <Text>Is Coverage for Named Terminal Required ?</Text>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <Select placeholder='-????-' size='sm' borderRadius='5px'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </VStack>

                                            </HStack>

                                            <HStack w={'100%'} justifyContent={'center'} fontWeight={'bold'} fontSize={'xl'}><Text>Percentage of hauls by distance</Text></HStack>
                                            <HStack w={'100%'} p={4}>
                                                <HStack w={'30%'} >
                                                    <VStack w={'50%'} alignItems={'flex-start'}>
                                                        <Text>1-250 Miles</Text>
                                                    </VStack>
                                                    <VStack w={'50%'} >
                                                        <Input placeholder='0' size='sm' borderRadius='5px' />
                                                    </VStack>
                                                </HStack>
                                                <HStack w={'30%'} >
                                                    <VStack w={'50%'} alignItems={'flex-start'}>
                                                        <Text>251+1,000 Miles</Text>
                                                    </VStack>
                                                    <VStack w={'50%'} >
                                                        <Input placeholder='0' size='sm' borderRadius='5px' />
                                                    </VStack>
                                                </HStack>
                                                <HStack w={'30%'} >
                                                    <VStack w={'50%'} alignItems={'flex-start'}>
                                                        <Text>1001+ Miles</Text>
                                                    </VStack>
                                                    <VStack w={'50%'} >
                                                        <Input placeholder='0' size='sm' borderRadius='5px' />
                                                    </VStack>
                                                </HStack>
                                            </HStack>

                                            <HStack w={'100%'} pb={2}>
                                                <VStack w={'70%'} alignItems={'flex-start'}>
                                                    <Text>Is LTL 72 hours off-truck cover required</Text>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <Select placeholder='-????-' size='sm' borderRadius='5px'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'100%'} pb={2}>
                                                <VStack w={'70%'} alignItems={'flex-start'}>
                                                    <Text>Is any cargo hauled owned by the insured ?</Text>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <Select placeholder='-????-' size='sm' borderRadius='5px'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'100%'} pb={2}>
                                                <VStack w={'70%'} alignItems={'flex-start'}>
                                                    <Text>Has any inurer within the past five (5) Years refused to renew, or has canceled any insurance for the applicant?</Text>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <Select placeholder='-????-' size='sm' borderRadius='5px'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'100%'} pb={2}>
                                                <VStack w={'70%'} alignItems={'flex-start'}>
                                                    <Text>Will you use hired in Equipment?</Text>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <Select placeholder='-????-' size='sm' borderRadius='5px'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'100%'} pb={2}>
                                                <VStack w={'70%'} alignItems={'flex-start'}>
                                                    <Text>Will you loan your equipment out to others?</Text>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <Select placeholder='-????-' size='sm' borderRadius='5px'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'100%'} pb={2}>
                                                <VStack w={'70%'} alignItems={'flex-start'}>
                                                    <Text>Do you subcontract to other parties?</Text>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <Select placeholder='-????-' size='sm' borderRadius='5px'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'100%'} pb={2}>
                                                <VStack w={'70%'} alignItems={'flex-start'}>
                                                    <Text>Do you own or use vehicles and /or equipment other than those listed?</Text>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <Select placeholder='-????-' size='sm' borderRadius='5px'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Select>
                                                </VStack>

                                            </HStack>
                                            <HStack w={'100%'} pb={2}>
                                                <VStack w={'70%'} alignItems={'flex-start'}>
                                                    <Text>At what periods are your vehicles and/or equipment regularly inspeted and serviced?</Text>
                                                </VStack>
                                                <VStack w={'30%'} >
                                                    <Select placeholder='-????-' size='sm' borderRadius='5px'>
                                                        <option>Monthly</option>
                                                        <option>Every 2 Months</option>
                                                        <option>Every 6 Months</option>
                                                        <option>ANNUALY</option>
                                                        <option>NEVER</option>
                                                    </Select>
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
                                </Accordion>

                            </Box>
                            <Button colorScheme={'blue'} size='md' color='white' width='30%'>
                                Continue
                            </Button>



                        </VStack>
                    </Box>

                </Flex>
            </Container>
        </>
    )
}

export default APD