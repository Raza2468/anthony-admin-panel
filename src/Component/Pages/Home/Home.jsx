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
            <Header />
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
    )
}