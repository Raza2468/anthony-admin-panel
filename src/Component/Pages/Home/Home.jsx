import { useState } from 'react'
import { Container, Grid, GridItem, Sidebar, Stack } from '@chakra-ui/react';
import {
    Box, Center, IconButton, InputLeftElement, Divider, InputGroup, Input,
    HStack, Heading, Text, Flex, Button, VStack, Image, AspectRatio
} from '@chakra-ui/react';
import Header from '../../Header/Header'


export default function HomeScreen() {


    return (

        <div>
            
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
                        {/* <HStack justifyContent='center'>
                            <Heading color='#2347F0' fontSize='4xl'>AGENT BULLETINS</Heading>
                        </HStack> */}
                        <Flex justifyContent={''} alignItems={'center'} flexDir={'column'} >
                            <Box color={'blue'} fontWeight={'bold'} fontSize={'3xl'}>AGENT BULLETIN
                            </Box>
                            <Box color={'black'} fontSize={'2xl'}>It is a long established fact that a reader will be distracted by the readable content of
                            </Box>
                            <Button mt={'6'} color={'white'} bg={'blue'}   >Quotes@gmail.com</Button>
                        </Flex>
                        <Flex bg={'blackAlpha.200'} justifyContent={'space-between'} alignItems={'center'} mt={'20px'} flexDir={'column'}   >
                            <Box color={'black'} fontWeight={'bold'} fontSize={'3xl'}    >Click Advantages :  </Box>
                            <HStack mb={'20px'} flexShrink={'3'} justifyContent={'space-around'}   >
                                <Button color={'white'} bg={'blue'}    >
                                    Earn More Commision
                                </Button>
                                <Button color={'white'} bg={'blue'}    >
                                    Friendly Customer Service
                                </Button>
                                <Button color={'white'} bg={'blue'}    >
                                    Insured Can Make  Payment Online
                                </Button>
                            </HStack>
                            <HStack mb={'20px'}       >
                                <Button color={'white'} bg={'blue'}    >
                                    Insured  Recived Reminder When Late
                                </Button>
                                <Button color={'white'} bg={'blue'}    >
                                    Insured Can   Review   Thier Account Online
                                </Button>
                            </HStack>
                            <HStack>
                                <Button color={'white'} bg={'blue'}    >
                                    Finance One Or Multiple Polices On One Contact
                                </Button>
                            </HStack>
                        </Flex>
                        <Flex mt={'40px'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} >
                            <Box fontSize={'3xl'} fontWeight={'bold'} >Thank You For Your Understanding </Box>
                            <Box fontSize={'3xl'} fontWeight={'bold'} >We Hope You Have a Happy and Healthy,   New Year !</Box>
                        </Flex>
                    </Box>

                </Flex>
            </Container>
        </div>
    )
}