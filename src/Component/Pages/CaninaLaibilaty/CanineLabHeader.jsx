import { useState } from 'react'
// import "./Gl&Artisan.css";
import { Container, Grid, GridItem, Sidebar, Stack } from '@chakra-ui/react';
import {
    Box, Center, IconButton, InputLeftElement, Divider, InputGroup, Input,
    HStack, Heading, Text, Flex, VStack, Image, AspectRatio, Accordion,
    AccordionItem,
    AccordionButton, Button,
    AccordionPanel, Select,
    AccordionIcon, FormLabel, FormControl
} from '@chakra-ui/react';

import Header from '../../Header/Header'
import { Checkbox } from 'antd';
import Nodes from './Notes/Notes';
import GLdrops from './GLdrops/GLdrops';
import GL from './GL/GL';
import Diary from './Diary/Diary';



export default function CanineLabHeader({ ResultsPerPageDrop }) {

    const [PerPage, setPerPage] = useState("GL");
    console.log(PerPage);

    console.log(ResultsPerPageDrop, "ResultsPerPageDropResultsPerPageDrop");



    return (
        <div>
            {/* <Header /> */}

            <Flex h="" width='auto'
                rounded='md'
                // boxShadow='md'
                backgroundColor='#F6F6F6'
                marginLeft="15%" p='10'
            >
                <Box flex="1">
                    <Center>
                        <HStack justifyContent='center' boxShadow='2xl' style={{ justifyContent: "space-around" }} width='90%' height='10vh' align='center' rounded='md' mt="4">
                            {/* <Heading color='#2347F0' fontSize='4xl'>MGA Link</Heading> */}
                            {/* <Box boxShadow='md'> */}
                            <Text onClick={() => setPerPage('GL')} cursor="pointer" _hover={{ textDecoration: "underLine" }}>GL</Text>
                            <Text onClick={() => setPerPage('Premiums')} cursor="pointer" _hover={{ textDecoration: "underLine" }}>Premiums</Text>
                            <Text onClick={() => setPerPage('Nodes')} cursor="pointer" _hover={{ textDecoration: "underLine" }}>Notes</Text>
                            <Text onClick={() => setPerPage('Diary')} cursor="pointer" _hover={{ textDecoration: "underLine" }}>Diary</Text>
                            <Text onClick={() => setPerPage('Memos')} cursor="pointer" _hover={{ textDecoration: "underLine" }}>Memos</Text>

                            {/* </Box> */}
                        </HStack>
                    </Center>
                    <br />

                </Box>

            </Flex>


            {/* </Container> */}

            {
                // PerPage === 'GLGrop' ? <><GLdrops /></> :
                    PerPage === 'GL' ? <><GL /></> :
                        PerPage === 'Premiums' ? <><GL /></> :
                            PerPage === 'Nodes' ? <><Nodes /></> :
                                PerPage === 'Diary' ? <><Diary /></> :
                                    PerPage === 'Memos' ? <><Nodes /></> :
                                        <></>}
        </div>
    )
}