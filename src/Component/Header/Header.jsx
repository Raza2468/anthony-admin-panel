

import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton, InputGroup,
    Divider, Input,
    Avatar, Button,
    Heading, HStack, Box,
    Select, InputLeftElement
} from '@chakra-ui/react';
import { SearchIcon, SettingsIcon, BellIcon, ChatIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiSettings
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from './nav'
import HomeScreen from '../Pages/Home/Home';
// import { Link, NavLink, withRouter } from 'react-router-dom';
import GlArtisan from '../Pages/Gl&Artisan/Gl&Artisan';
import BuilderRiskHeader from '../Pages/BuilderRisk/BuilderRiskHeader';
import APDheader from '../Pages/APD/APDheader';
import MTCheader from '../Pages/MTC/MTCheader';
import FloodHeader from '../Pages/Floot/FloodHeader';
import ClientSearch from '../Pages/ClientSearch/ClientSearch';
import CanineLabHeader from '../Pages/CaninaLaibilaty/CanineLabHeader';
import FileAclaim from '../Pages/FileAclaim/FileAclaim';
import GLdrops from '../Pages/Gl&Artisan/GLdrops/GLdrops';

export default function Header() {

    const [navSize, changeNavSize] = useState("large")
    const [resultsPerPage, setResultsPerPage] = useState("home");
    const [MGAOptions, setMGAOptions] = useState("");

    return (
        <div>


            <Flex
                pos="fixed"
                // pos={navSize == "small" ? "fixed" : "sticky"}
                left="5"
                h="100%"
                // marginTop="2.5vh"
                boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
                borderRadius={navSize == "small" ? "15px" : "30px"}
                w={navSize == "small" ? "75px" : "200px"}
                flexDir="column"
                justifyContent="space-between"

            // position="fixed"
            // left={0}
            // p={7}
            // top={0}
            // h="100%"
            // bg="#2347F0"
            // overflowX="auto"
            // boxShadow="base"

            >

                <Flex
                    p="5%"
                    flexDir="column"
                    w="100%"
                    alignItems={navSize == "small" ? "center" : "flex-start"}
                    as="nav"

                >
                    <IconButton
                        background="none"
                        mt={5}
                        w={navSize == "small" ? "75px" : "400px"}
                        _hover={{ background: 'none' }}
                        icon={<FiMenu />}
                        onClick={() => {
                            if (navSize == "small")
                                changeNavSize("large")
                            else
                                changeNavSize("small")
                        }}
                    />
                    <Flex align="center">

                        <Avatar size="sm" src="avatar-1.jpg" />

                        <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                            <Heading as="h3" size="sm">Sylwia Weller</Heading>
                            <Text color="gray">Admin</Text>

                        </Flex>


                    </Flex>
                    <Divider display={navSize == "small" ? "none" : "flex"} />


                    <NavItem navSize={navSize} icon={FiHome} title="Dashboard" description="This is the description for the dashboard." />
                    <NavItem navSize={navSize} icon={FiCalendar} title="Calendar" active />
                    <NavItem navSize={navSize} icon={FiUser} title="Clients" />
                    <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" />
                    <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" />
                    <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" />
                    <Select placeholder='New Quoto' navSize={navSize}
                        value={resultsPerPage} onChange={(event) => setResultsPerPage(event.target.value)}
                    >
                        <option value='/GlArtisan' style={{ color: "#2347F0", fontWeight: "bold" }}>GL & Artisan Contractors</option>
                        <option value='/BuilderRisk' style={{ color: "#2347F0", fontWeight: "bold" }}>Builders Risk</option>
                        <option value='/CanineLabHeader' style={{ color: "#2347F0", fontWeight: "bold" }}>Canine Laibility</option>
                        <option value='option4' style={{ color: "#2347F0", fontWeight: "bold" }}>Old MErc GL</option>
                        <option value='' style={{ color: "#2347F0", fontWeight: "bold" }}>Commerical GL</option>
                        <option value='option6' style={{ color: "#2347F0", fontWeight: "bold" }}>Commerical Property</option>
                        <option value='option7' style={{ color: "#2347F0", fontWeight: "bold" }}>Commerical Package</option>
                        <option value='option8' style={{ color: "#2347F0", fontWeight: "bold" }}>Home Owners</option>
                        <option value='option9' style={{ color: "#2347F0", fontWeight: "bold" }}>Dewelling Fine</option>
                        <option value='/FloodHeader' style={{ color: "#2347F0", fontWeight: "bold" }}>Flood</option>
                        <option value='/MTCheader' style={{ color: "#2347F0", fontWeight: "bold" }}>MTC</option>
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
                    <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
                </Flex>

                {/* <Flex
                    p="5%"
                    flexDir="column"
                    w="100%"
                    alignItems={navSize == "small" ? "center" : "flex-start"}
                    mb={4}
                >
                    <Divider display={navSize == "small" ? "none" : "flex"} />
                    <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                    <Heading as="h3" size="sm">Sylwia Weller</Heading>
                    <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>

                </Flex> */}

            </Flex>



            <Flex p={4} color="white" justifyContent="center" marginLeft="16%" backgroundColor="#F6F6F6" boxShadow='xl'>
                <Box flex="1" marginLeft="1%">
                    {/* <Flex
                        p="5"
                        flexDir="column"
                        as="nav"
                        alignItems='flex-start'
                    > */}
                    {/* </Flex> */}
                    {/* <IconButton
                        background='red.100'
                        mt="0"
                        _hover={{ background: "none" }}
                   
                        icon={<FiMenu />}
                        onClick={() => {
                            if (openMenu == 'small') {
                                setOpenMenu('large')
                            } else {
                                setOpenMenu('small')
                            }
                        }}
                    /> */}
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
            <Flex p={4} color="white" marginLeft="16%" justifyContent="center" backgroundColor='whiteAlpha.100' boxShadow="base">
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
                            resultsPerPage === '/MTCheader' ? (<><MTCheader /></>) :
                                resultsPerPage === '/FloodHeader' ? (<><FloodHeader /></>) :
                                    resultsPerPage === '/CanineLabHeader' ? (<><CanineLabHeader /></>) :
                                        (resultsPerPage === 'ClientSearch') ? (<><ClientSearch /></>) :
                                            (resultsPerPage === 'FileAclaim') ? (<><FileAclaim /></>) :
                                                (MGAOptions === 'option3') ? (<>{console.log(MGAOptions, "raza")}</>)
                                                    : <></>
            }


        </div>
    )
}