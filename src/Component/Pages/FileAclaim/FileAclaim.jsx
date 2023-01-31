import { useState } from 'react';
import { Container, Grid, GridItem, Sidebar, Stack } from '@chakra-ui/react';
import {
    Box, Center, IconButton, InputLeftElement, Divider, InputGroup, Input,
    HStack, Heading, Text,Select, Flex, Button, VStack, Image, AspectRatio
} from '@chakra-ui/react';

import Header from '../../Header/Header'

export default function FileAclaim() {


    return (
        <div>
            {/* <Header /> */}

            {/* <Container maxW="container" marginLeft="15%" p='10' width="" rounded='lg'
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
                            <Heading color='#2347F0' fontSize='4xl'>File a Claim</Heading>
                        </HStack>
                    </Box>

                </Flex>
            </Container> */}
            <Container maxW="container" marginLeft="15%" p='10' width="" rounded='lg'
                columns={{ sm: 2, md: 4 }}
                // backgroundColor='red.100'
            // spacing='8'
            // textAlign='center'
            backgroundColor='#F6F6F6'
            >
                <Flex h="" width='auto'
                    rounded='md'
                    boxShadow='md'
                >
                </Flex>
                <Box mt={'40px'}  >
                    <Box w={'full'} textAlign={'center'} fontSize={'40px'} color={'white'} bg={'blue'} >Search  </Box>
                    <Flex mt={'30px'} justifyContent={'space-between'} >
                        <VStack>
                            <Box>Claim Number   </Box>
                            <Input border={'1px solid black'} size='md' />
                        </VStack>
                        <VStack>
                            <Box> Contract   Number </Box>
                            <Input border={'1px solid black'} size='md' />
                        </VStack>
                        <VStack>
                            <Box>TPA Claim Number </Box>
                            <Input border={'1px solid black'} size='md' />
                        </VStack>
                        <VStack>
                            <Box> TPA </Box>
                            <Select border={'1px solid black'} placeholder='Select option'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </VStack>
                    </Flex>
                    <Flex mt={'30px'} justifyContent={'space-between'} >
                        <VStack>
                            <Box>  Last Buisness Name </Box>
                            <Input border={'1px solid black'} size='md' />
                        </VStack>
                        <VStack>
                            <Box> First Name </Box>
                            <Input border={'1px solid black'} size='md' />
                        </VStack>
                        <VStack>
                            <Box>TPA Claim Number </Box>
                            <Input border={'1px solid black'} size='md' />
                        </VStack>
                        <VStack>
                            <Box>Status  </Box>
                            <Select border={'1px solid black'} placeholder='Select option'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </VStack>
                    </Flex>
                    <Flex mt={'30px'}  >
                        <VStack mr={'40px'}  >
                            <Box>Status  </Box>
                            <Select border={'1px solid black'} placeholder='Select option'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </VStack>
                        <VStack mr={'40px'}  >
                            <Box>Status  </Box>
                            <Select border={'1px solid black'} placeholder='Select option'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </VStack>
                        <VStack mr={'40px'}  >
                            <Box>Status  </Box>
                            <Select border={'1px solid black'} placeholder='Select option'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </VStack>
                    </Flex>
                    <div style={{ "border-radius": "3px", "width": "52.3%", 'margin-top': "30px" }} id="BlockLossCodeAjax"> <select name="LossCode" multiple="" size="20" class="Task17098_select">
                        <option value="0" selected="">------</option> <option value="144">010 - Flood</option> <option value="85">A10 - Hail</option> <option value="86">A11 - Flood or Rising Water</option> <option value="87">A12 - Theft</option> <option value="88">A13 - False Pretence</option> <option value="89">A14 - Earthquake</option> <option value="90">A15 - Explosion</option> <option value="91">A16 - Riot or Civil Commotion</option> <option value="92">A17 - Conveyance loss while being transported (sinking, burning, collision, or derailment)</option> <option value="93">A18 - Striking of Load</option> <option value="94">A19 - Shifting of Load</option> <option value="95">A1a - Collision - At Fault</option> <option value="96">A1b - Collision - Not at Fault</option> <option value="97">A1c - Collision - Overturn</option> <option value="98">A1d - Collision - Overturn while loading/unloading</option> <option value="99">A2 - Comprehensive</option> <option value="100">A20 - Refrigeration Breakdown</option> <option value="101">A21 - Hired Auto Physical Damage</option> <option value="102">A22 - Non-Owned Auto Physical Damage</option> <option value="103">A23 - Towing</option> <option value="104">A3 - Glass Breakage</option> <option value="105">A4 - Collision with Animal or Bird</option> <option value="106">A5 - Falling Objects or Missiles</option> <option value="107">A6 - Fire</option> <option value="108">A7 - Vandalism or Mischief</option> <option value="109">A8 - Lightening</option> <option value="110">A9 - Windstorm</option> <option value="111">L1 - Liability Bodily Injury</option> <option value="112">L10 - Professional</option> <option value="113">L10a - Professional - Medical Malpractice</option> <option value="114">L1a - Liability BI - Slip/Fall Ice</option> <option value="115">L1b - Liability BI - Slip/Fall Sidewalk/Stairs</option> <option value="116">L1c - Liability BI - Slip/Fall Other</option> <option value="117">L1d - Liability BI - Assault/Battery</option> <option value="118">L1e - Liability BI - Dog Bite</option> <option value="119">L1f - Liability BI - Animal</option> <option value="120">L1g - Liability BI - Fire</option> <option value="121">L1h - Liability BI - Weapon</option> <option value="122">L1i - Liability BI - Food Product</option> <option value="123">L1j - Liability BI - Other than Food Product</option> <option value="124">L1k - Liability BI - Unspecified Negligence</option> <option value="125">L1l - Liability BI - Pollution</option> <option value="126">L1m - Liability BI - Hired/Non-Owned Auto</option> <option value="127">L1n - Liability BI - Products</option> <option value="128">L1o - Liability BI - Completed Operations</option> <option value="129">L1p - Liability BI - Swimming Pool</option> <option value="130">L1q - Liability BI - Athletic Participant</option> <option value="131">L1r - Liability BI - Trampoline</option> <option value="132">L2 - Liability Property Damage</option> <option value="133">L2a - Liability PD - Fire</option> <option value="134">L2b - Liability PD - Welding</option> <option value="135">L2c - Liability PD - Roofing Water Damage</option> <option value="136">L2d - Liability PD - Completed Operations</option> <option value="137">L3 - Medical Expense</option> <option value="138">L4 - Comprehensive Personal Liability</option> <option value="139">L5 - Damage to Premises Rented</option> <option value="140">L6 - Personal Injury</option> <option value="141">L7 - Advertising Injury</option> <option value="142">L8 - Employers Liability/Stop Gap</option> <option value="143">L9 - Breach of Contract</option> <option value="32">P1 - Fire</option> <option value="33">P10 - Vandalism</option> <option value="34">P11 - Sprinkler Leakage</option> <option value="35">P12 - Sinkhole Collapse</option> <option value="36">P13 - Volcanic Action</option> <option value="37">P14 - Breakage of Glass</option> <option value="38">P15 - Falling Objects</option> <option value="39">P16 - Weight of Snow, Ice or Sleet</option> <option value="40">P17 - Water Damage</option> <option value="41">P17a - Water Damage - Broken Pipe</option> <option value="42">P17b - Water Damage - Rain</option> <option value="43">P17c - Water Damage - Sewer/Drain/Sump back up/overflow</option> <option value="44">P18 - Theft</option> <option value="45">P19 - Other Unspecified Perils</option> <option value="46">P1a - Fire - Wildfire</option> <option value="47">P1b - Fire - Arson</option> <option value="48">P1c - Fire - Cooking</option> <option value="49">P1d - Fire - Dryer Fire</option> <option value="50">P1e - Fire - Electrical</option> <option value="51">P1f - Fire - Following Earthquake</option> <option value="52">P2 - Lightning</option> <option value="53">P20 - Equipment Breakdown</option> <option value="54">P21 - Flood</option> <option value="55">P21a - Flood - Hurricane</option> <option value="56">P22 - Earthquake</option> <option value="57">P23 - Crime</option> <option value="58">P23a - Crime - Robbery</option> <option value="59">P23b - Crime - Burglary</option> <option value="60">P23c - Crime - Employee Dishonesty</option> <option value="61">P23d - Crime - Employee Theft</option> <option value="62">P24 - Business Income</option> <option value="63">P24a - Business Income - Loss of Rents</option> <option value="64">P24b - Business Income - Extra Expense</option> <option value="65">P25 - Construction Defect</option> <option value="66">P26 - Food Spoilage</option> <option value="67">P27 - Terrorism</option> <option value="68">P28 - Fungus/Mold</option> <option value="69">P29 - Collapse</option> <option value="70">P3 - Explosion</option> <option value="71">P30 - Discharge, overflow of Steam, Water from Systems, Appliances</option> <option value="72">P31 - Tearing Apart, Cracking, Burning, Bulging of Systems</option> <option value="73">P32 - Freezing of systems, Appliances</option> <option value="74">P33 - Artificially Generated Electrical Current</option> <option value="75">P34 - Identity Theft</option> <option value="76">P4 - Windstorm</option> <option value="77">P4a - Windstorm - Hurricane</option> <option value="78">P4b - Windstorm - Tornado</option> <option value="79">P4c - Windstorm - Tropical Named Storm</option> <option value="80">P5 - Hail</option> <option value="81">P6 - Smoke</option> <option value="82">P7 - Aircraft</option> <option value="83">P8 - Vehicle</option> <option value="84">P9 - Riot or Civil Commotion</option> </select> </div>
                    <VStack>
                    </VStack>
                </Box>
            </Container>
        </div>
    )
}