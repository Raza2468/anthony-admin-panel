import { useState } from 'react'
import "./MGALink.css";
import { Container, Grid, GridItem, Sidebar, Stack } from '@chakra-ui/react';
import {
    Box, Center, IconButton, InputLeftElement, Divider, InputGroup, Input,
    HStack, Heading, Text, Flex, Button, VStack, Image, AspectRatio
} from '@chakra-ui/react';

import Header from '../../Header/Header'

export default function MGALink() {


    return (
        <div>
            {/* <Header /> */}

            <Container maxW="container" marginLeft="15%" p='10' width="" rounded='lg'
                boxShadow='md'
                columns={{ sm: 2, md: 4 }}
                backgroundColor='red.100'
            // spacing='8'
            // textAlign='center'
            // backgroundColor='#F6F6F6'
            >
                <Flex h="100vh" width='auto'
                    rounded='md'
                    boxShadow='md'
                    backgroundColor='#F6F6F6'
                >
                    <Box flex="1">
                        <HStack justifyContent='center'>
                            <Heading color='#2347F0' fontSize='4xl'>MGA Link</Heading>
                        </HStack>
                    </Box>

                </Flex>
            </Container>
        </div>
    )
}