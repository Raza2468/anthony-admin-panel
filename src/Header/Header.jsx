import { useState } from 'react'
import "./Header.css";
import { DatePicker } from 'antd';
import { Container, Grid, GridItem, Sidebar, Stack } from '@chakra-ui/react';
import {
    Box, Center, IconButton, InputLeftElement, Divider, InputGroup, Input,
    HStack, Heading, Text, Flex, Button, VStack, Image, AspectRatio
} from '@chakra-ui/react';
import PoweroffOutlined from '@ant-design/icons';
import { SearchIcon, SettingsIcon, BellIcon, ChatIcon, InfoOutlineIcon } from '@chakra-ui/icons';
// 




function Header() {


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

                    <Button w="100%" bg="#2347F0" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}
                        // rounded="md"
                        // fontWeight="semibold"
                        color="white"
                    > Home</Button>
                    <Button w="100%" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>New Quote</Button>
                    <Button w="100%" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>MGA Links</Button>
                    <Button w="100%" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>Client Search</Button>
                    <Button w="100%" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>File a Claim</Button>
                    <Button w="100%" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>Click Financing</Button>
                    <Button w="100%" bg="#2347F0" color="white" _hover={{ bg: "#0B67FB" }} _focus={{ boxShadow: "outline", color: "white" }}>Resource Center</Button>
                    <Button w="100%">Log out</Button>
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

            {/* Page Conatiner */}
            
            <Container maxW="container"
                marginLeft="15%"
                // spacing='8'
                p='10'
                // textAlign='center'
                rounded='lg'
                boxShadow='md'
                backgroundColor='red.100'
                // backgroundColor='#F6F6F6'
                columns={{ sm: 2, md: 4 }}
                width=""
            >
                <Flex h="100vh" width='auto'
                    rounded='md'
                    boxShadow='md'
                    backgroundColor='#F6F6F6'
                >
                    <Box flex="1">
                        <HStack justifyContent='center'>
                            <Heading color='#2347F0' fontSize='4xl'>AGENT BULLETINS</Heading>
                        </HStack>
                    </Box>

                </Flex>
            </Container>

        </div>
    );
}

export default Header;
