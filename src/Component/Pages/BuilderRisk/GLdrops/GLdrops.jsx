import { useState } from 'react';
import { Container, Grid, GridItem, Sidebar, Stack, Card, CardHeader, CardBody, CardFooter, Select } from '@chakra-ui/react';

import {
    Box, Center, IconButton, InputLeftElement, Divider, InputGroup, Input,
    HStack, Heading, Text, Flex, Button, VStack, Image, AspectRatio
} from '@chakra-ui/react';
// import GlArtisan from '../Gl&Artisan';
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import GlArtisan from '../BuilderRiskHeader';
// import GL from '../GL/BuilderRisk';

function GLdrops() {


    let navigate = useNavigate();
    const [ResultsPerPageDrop, setResultsPerPageDrop] = useState("hom");
    console.log(ResultsPerPageDrop);

    const handle = (params) => {
        //   navigate('/GlArtisan ')
        console.log("yayya");
        <GlArtisan ResultsPerPageDrop={ResultsPerPageDrop} />
        // if (ResultsPerPageDrop === "option1") {
        // }
    }
    return (
        <>
            {/* <Header /> */}

            <Container maxW="container" marginLeft="15%" p='10' width="" rounded='lg'
                boxShadow='md'
                columns={{ sm: 2, md: 4 }}
                backgroundColor='whitesmoke'
            // spacing='8'
            // textAlign='center'
            // backgroundColor='#F6F6F6'
            >
                <Flex h="100vh" width='auto'
                // rounded='md'
                // boxShadow='md'
                // backgroundColor='#F6F6F6'

                >
                    {/* start */}
                    <Box flex="1">
                        <HStack justifyContent='center' marginTop='5%'>
                            <Card align='center' h="50vh" width='60%'
                                rounded='md'
                                boxShadow='md'
                                backgroundColor='#F6F6F6'>
                                <CardHeader backgroundColor='#2347F0' width='100%' rounded='md' align='center'>
                                    <Heading size='md' color='white'>GL & Artisan Contractors</Heading>
                                </CardHeader>
                                <CardBody width='70%' marginTop='10%' >
                                    <Select placeholder='Select State' size='md'
                                        value={ResultsPerPageDrop} onChange={(event) => setResultsPerPageDrop(event.target.value)}
                                    >
                                        <option value='option1'>Alabama</option>
                                        <option value='option2'>Florida</option>
                                        <option value='option3'>Geogria</option>
                                        <option value='option4'>Flordia</option>
                                        <option value='option5'>Louisiana</option>
                                        <option value='option6'>South Carollia</option>
                                        <option value='option7'>Tennesse</option>
                                    </Select>
                                </CardBody>
                                <CardFooter width='100%' align='center' justifyContent='center'>
                                    {/* <Link to='/GlArtisan'> */}
                                    <Button backgroundColor='#2347F0' color='white' width='100%' onClick={() => { handle() }}  >Create Quote</Button>
                                    {/* </Link> */}
                                    {/* <Button backgroundColor='#2347F0' color='white' width='35%' >Create Quote</Button> */}
                                </CardFooter>
                            </Card>
                        </HStack>
                    </Box>

                </Flex>
            </Container>


            {
                ResultsPerPageDrop === 'option1' ? <>
                    {/* <GL /> */}
                </> : <></>}
        </>
    )
}

export default GLdrops