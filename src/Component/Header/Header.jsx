import React, { useState } from 'react';
import "./Header.css";
import {
    Box, Center, IconButton, InputLeftElement, Divider, InputGroup, Input,
    HStack, Heading, Text, Flex, Button, VStack, Image, AspectRatio, Select, Container
} from '@chakra-ui/react';
import PoweroffOutlined from '@ant-design/icons';
import { SearchIcon, SettingsIcon, BellIcon, ChatIcon, InfoOutlineIcon } from '@chakra-ui/icons';
// import GlArtisan from '../Pages/Gl&Artisan/Gl&Artisan';
// import Builderisk from '../Pages/Builderisk/Builderisk';
import HomeScreen from '../Pages/Home/Home';
import { Link, NavLink, withRouter } from 'react-router-dom';
import GlArtisan from '../Pages/Gl&Artisan/Gl&Artisan';
import GLdrops from '../Pages/Gl&Artisan/GLdrops/GLdrops';
// import Caninelability from '../Pages/Caninelability/Caninelability';



function Header(props) {

    const [resultsPerPage, setResultsPerPage] = useState("/");
    console.log(resultsPerPage);
    const [openMenu, setOpenMenu] = useState(false)

    // parameter num corresponds to .open-# classes
    // is assigned when Menu clicked triggering animated dropdown
    // const setClassNames = num => {
    //     const classArr = ["m-item"];
    //     if (openMenu) classArr.push(`open-${num}`)
    //     return classArr.join(' ')
    // }

    // takes route string as parameter
    const pushToRoute = route => {
        // props.history.push(route)
        // setOpenMenu(false)
        console.log(window.location.pathname, route, "RAza");
    }

    // function CustomLink({ to, children, props }) {
    //     return (
    //         <Link to={to}>{children}</Link>
    //     )
    // }



    return (
        <div>
            {/* Side Bar */}
            <Box position="fixed" left={0}
                p={7} w="15%" top={0} h="100%" bg="#2347F0"
                overflowX="auto"
                boxShadow="base"
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
                    {/* <Link to="/"> */}
                    <Button w="100%" bg="#2347F0" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}
                        // rounded="md"
                        // fontWeight="semibold"
                        color="white"
                        justifyContent="flex-start"
                        onClick={() => setResultsPerPage('home')}
                    >
                        Home</Button>
                    {/* </Link> */}
                    <Select placeholder='New Quoto' color='white'
                        value={resultsPerPage}
                        // onChange={(event) => setResultsPerPage(<Link to={event.target.value}></Link>)
                        onChange={(event) => setResultsPerPage(event.target.value)
                            // onClick={() => setOpenMenu(!openMenu)}
                        }
                    >
                        <option value='/GlArtisan' style={{ color: "#2347F0", fontWeight: "bold" }}
                            // onClick={(event) => <Link to='/GlArtisan'></Link>}
                            onChange={() => console.log(window.location.pathname, "razazazazaz")}
                        // as={ <Link to='/GlArtisan'></Link> } 

                        >

                            {/* <CustomLink to='/GlArtisan'>My Link</CustomLink> */}
                            {/* <Link to='/GlArtisan'>My Link</Link> */}
                            {/* <Link as={NavLink} end to="/GlArtisan" _activeLink={{ fontWeight: "bold" }}>
                            </Link> */}
                            GL & Artisan Contractors

                        </option>


                        <option value='option2' style={{ color: "#2347F0", fontWeight: "bold" }}>Builders Risk</option>



                        <option value='option3' style={{ color: "#2347F0", fontWeight: "bold" }}>Canine Laibility</option>
                        <option value='option4' style={{ color: "#2347F0", fontWeight: "bold" }}>Old MErc GL</option>
                        <option value='option5' style={{ color: "#2347F0", fontWeight: "bold" }}>Commerical GL</option>
                        <option value='option6' style={{ color: "#2347F0", fontWeight: "bold" }}>Commerical Property</option>
                        <option value='option7' style={{ color: "#2347F0", fontWeight: "bold" }}>Commerical Package</option>
                        <option value='option8' style={{ color: "#2347F0", fontWeight: "bold" }}>Home Owners</option>
                        <option value='option9' style={{ color: "#2347F0", fontWeight: "bold" }}>Dewelling Fine</option>
                        <option value='option10' style={{ color: "#2347F0", fontWeight: "bold" }}>MTC</option>
                        <option value='option11' style={{ color: "#2347F0", fontWeight: "bold" }}>APD</option>
                        <option value='option12' style={{ color: "#2347F0", fontWeight: "bold" }}>Pakage APD MTC</option>
                        <option value='option13' style={{ color: "#2347F0", fontWeight: "bold" }}>Special Events</option>
                        <option value='option14' style={{ color: "#2347F0", fontWeight: "bold" }}>Vacant Property</option>
                        <option value='option15' style={{ color: "#2347F0", fontWeight: "bold" }}>WDBB</option>
                        <option value='option16' style={{ color: "#2347F0", fontWeight: "bold" }}>Application</option>
                        <option value='option17' style={{ color: "#2347F0", fontWeight: "bold" }}>Quote Submission</option>
                        <option value='option18' style={{ color: "#2347F0", fontWeight: "bold" }}>Hiscox Now</option>
                        <option value='option19' style={{ color: "#2347F0", fontWeight: "bold" }}>Professional Liapility</option>
                    </Select>
                    <Button w="100%" justifyContent="flex-start" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>New Quote</Button>
                    <Button w="100%" justifyContent="flex-start" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>MGA Links</Button>
                    <Button w="100%" justifyContent="flex-start" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>Client Search</Button>
                    <Button w="100%" justifyContent="flex-start" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>File a Claim</Button>
                    <Button w="100%" justifyContent="flex-start" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>Click Financing</Button>
                    <Button w="100%" justifyContent="flex-start" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>Resource Center</Button>
                    <Button w="100%" >Log out</Button>
                </VStack>
            </Box>
            {/* Header 1 */}
            <Flex p={4} color="white" justifyContent="center" backgroundColor="#F6F6F6" boxShadow='xl'>
                <Box flex="1" marginLeft="16%">
                    <InputGroup w="50%" variant='outline'>
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


            {/* <Flex h="10vh" width='auto'
                    rounded='md'
                    boxShadow='md'
                    backgroundColor='#F6F6F6'
                >
                        <HStack justifyContent='center'>
                            <Heading color='#2347F0' fontSize='4xl'>MGA Link</Heading>
                        </HStack>
                    </Box>
                    <Box flex="1">
                    
                </Flex> */}

            {(resultsPerPage === 'home') ? (
                <><HomeScreen /></>) :
                resultsPerPage === '/GlArtisan' ? (
                    // <NavLink to="/GlArtisan" end>
                    <>
                        <GlArtisan />
                    </>
                    //   {/* </NavLink> */}
                )
                    // : (resultsPerPage === 'option2') ? (<><Builderisk /></>)
                    //     : (resultsPerPage === 'option3') ? (<><Caninelability /></>)
                    //         :(resultsPerPage==='home')?(<><HomeScreen /></>) 
                    : <></>
            }
        </div>
    );
}
export default Header;