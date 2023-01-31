import React, { useState } from 'react';
import "./Header.css";
import {
    Box, Center, IconButton, InputLeftElement, Divider, InputGroup, Input,
    HStack, Heading, Text, Flex, Button, VStack, Image, AspectRatio, Select, Container, Link
} from '@chakra-ui/react';
import HamburgerIcon from '@ant-design/icons';
import { SearchIcon, SettingsIcon, BellIcon, ChatIcon, InfoOutlineIcon } from '@chakra-ui/icons';
// import GlArtisan from '../Pages/Gl&Artisan/Gl&Artisan';
// import Builderisk from '../Pages/Builderisk/Builderisk';
import HomeScreen from '../Pages/Home/Home';
// import { Link, NavLink, withRouter } from 'react-router-dom';
import GlArtisan from '../Pages/Gl&Artisan/Gl&Artisan';
import GLdrops from '../Pages/Gl&Artisan/GLdrops/GLdrops';
import ClientSearch from '../Pages/ClientSearch/ClientSearch';
import FileAclaim from '../Pages/FileAclaim/FileAclaim';
import BuilderRiskHeader from '../Pages/BuilderRisk/BuilderRiskHeader';
import APDheader from '../Pages/APD/APDheader';
import CanineLabHeader from '../Pages/CaninaLaibilaty/CanineLabHeader';



function Header(props) {

    const [resultsPerPage, setResultsPerPage] = useState("/");
    console.log(resultsPerPage);
    const [openMenu, setOpenMenu] = useState("large")




    return (
        <div>
            {/* Side Bar */}
            <Box position="fixed" left={0}
                p={7} top={0} h="100%" bg="#2347F0"
                overflowX="auto"
                boxShadow="base"
                w={openMenu == "small" ? "75px" : "15%"}
            >



                <VStack >
                    <Divider />
                    <HStack spacing={1} alignItems="center" w="full" marginBottom="6">
                        <AspectRatio ratio={1} w={14}>
                            <Image src="https://icon-library.com/images/admin-icon-png/admin-icon-png-12.jpg" alt="Skateboard" />
                        </AspectRatio>
                        <VStack w="full" color="white" spacing={0} alignItems="flex-start">
                            <Heading size="1">Amelia Isabella</Heading>
                            <Text>Premium User</Text>
                        </VStack>
                    </HStack>
                    <Divider />
                    <br />

                    <Button w="100%" bg="#2347F0" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}
                        color="white"
                        justifyContent="flex-start"
                        onClick={() => setResultsPerPage('home')}> Home</Button>
                    {/* </Link> */}
                    <Select placeholder='New Quoto' color='white'
                        value={resultsPerPage} onChange={(event) => setResultsPerPage(event.target.value)}
                    >
                        <option value='/GlArtisan' style={{ color: "#2347F0", fontWeight: "bold" }}>GL & Artisan Contractors</option>
                        <option value='/BuilderRisk' style={{ color: "#2347F0", fontWeight: "bold" }}>Builders Risk</option>
                        <option value='/CanineLabHeader' style={{ color: "#2347F0", fontWeight: "bold" }}>Canine Laibility</option>
                        <option value='option4' style={{ color: "#2347F0", fontWeight: "bold" }}>Old MErc GL</option>
                        <option value='option5' style={{ color: "#2347F0", fontWeight: "bold" }}>Commerical GL</option>
                        <option value='option6' style={{ color: "#2347F0", fontWeight: "bold" }}>Commerical Property</option>
                        <option value='option7' style={{ color: "#2347F0", fontWeight: "bold" }}>Commerical Package</option>
                        <option value='option8' style={{ color: "#2347F0", fontWeight: "bold" }}>Home Owners</option>
                        <option value='option9' style={{ color: "#2347F0", fontWeight: "bold" }}>Dewelling Fine</option>
                        <option value='option10' style={{ color: "#2347F0", fontWeight: "bold" }}>MTC</option>
                        <option value='/APDheader' style={{ color: "#2347F0", fontWeight: "bold" }}>APD</option>
                        <option value='option12' style={{ color: "#2347F0", fontWeight: "bold" }}>Pakage APD MTC</option>
                        <option value='option13' style={{ color: "#2347F0", fontWeight: "bold" }}>Special Events</option>
                        <option value='option14' style={{ color: "#2347F0", fontWeight: "bold" }}>Vacant Property</option>
                        <option value='option15' style={{ color: "#2347F0", fontWeight: "bold" }}>WDBB</option>
                        <option value='option16' style={{ color: "#2347F0", fontWeight: "bold" }}>Application</option>
                        <option value='option17' style={{ color: "#2347F0", fontWeight: "bold" }}>Quote Submission</option>
                        <option value='option18' style={{ color: "#2347F0", fontWeight: "bold" }}>Hiscox Now</option>
                        <option value='option19' style={{ color: "#2347F0", fontWeight: "bold" }}>Professional Liapility</option>
                    </Select>

                    <Button w="100%" justifyContent="flex-start" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}><Link href='http://clickfinancing.net/' isExternal >Click Financing</Link></Button>
                    <Button w="100%" justifyContent="flex-start" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>MGA Links</Button>
                    <Button w="100%" justifyContent="flex-start" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }} onClick={() => setResultsPerPage('ClientSearch')}>Client Search</Button>
                    <Button w="100%" justifyContent="flex-start" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }} onClick={() => setResultsPerPage('FileAclaim')}>File a Claim</Button>
                    {/* <Button w="100%" justifyContent="flex-start" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>Click Financing</Button> */}
                    <Button w="100%" justifyContent="flex-start" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>Resource Center</Button>
                    <Button w="100%" >Log out</Button>
                </VStack>
            </Box>
            {/* Header 1 */}
            <Flex p={4} color="white" justifyContent="center" backgroundColor="#F6F6F6" boxShadow='xl'>

                <Box flex="1" marginLeft="16%">
                    {/* <Flex
                        p="5"
                        flexDir="column"
                        as="nav"
                        alignItems='flex-start'
                    > */}
                    <IconButton
                        // background='none'
                        // mt="5"
                        // _hover={{ background: "none" }}
                        icon={<HamburgerIcon />}

                        onClick={() => {
                            if (openMenu == 'small') {
                                setOpenMenu('large')
                            } else {
                                setOpenMenu('small')

                            }
                        }}
                    />



                    {/* </Flex> */}
                    <InputGroup w="55%" variant='outline'>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<SearchIcon color='gray.300' />}
                        />
                        <Input type='tel' placeholder='Search' boxShadow='outline' />
                    </InputGroup>
                </Box>


                <Box flex="1" w="40%">
                    <HStack justifyContent="space-between">
                        <Text fontSize='2xl' color="black" ><SettingsIcon color="#2347F0" /></Text>
                        <Text fontSize='2xl' color="black"><ChatIcon color="#2347F0" /></Text>
                        <Text fontSize='2xl' color="black"><BellIcon color="#2347F0" /></Text>
                        <Text fontSize='2xl' color="black" marginRight='50%'><InfoOutlineIcon color="#2347F0" /></Text>
                    </HStack>
                </Box>
            </Flex>
            {/* Header 2 */}
            <Flex p={4} color="white" justifyContent="center" backgroundColor='whiteAlpha.100' boxShadow="base">
                <Box flex="1" marginLeft="16%">
                    <Text fontSize="xl" color="#2347F0" fontWeight='bold'>Home</Text>
                </Box>
                <Box flex="1">
                    <HStack justifyContent='end'>
                        <Button w="20%" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}> Overview <InfoOutlineIcon color="white" marginLeft='3' /></Button>
                    </HStack>
                </Box>
            </Flex>


            {(resultsPerPage === 'home') ? (<><HomeScreen /></>) :
                resultsPerPage === '/GlArtisan' ? (<><GlArtisan /></>) :
                    resultsPerPage === '/BuilderRisk' ? (<><BuilderRiskHeader /></>) :
                        resultsPerPage === '/APDheader' ? (<><APDheader /></>) :
                            resultsPerPage === '/CanineLabHeader' ? (<><CanineLabHeader /></>) :
                                (resultsPerPage === 'ClientSearch') ? (<><ClientSearch /></>) :
                                    (resultsPerPage === 'FileAclaim') ? (<><FileAclaim /></>)
                                        : <></>
            }
        </div>
    );
}
export default Header;