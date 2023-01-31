import React from 'react'
import { useState } from "react";
// import "./Gl&Artisan.css";
import { Container, Grid, GridItem, Sidebar, Stack } from "@chakra-ui/react";
import {
  Box,
  Center,
  IconButton,
  InputLeftElement,
  Divider,
  InputGroup,
  Input,
  HStack,
  Heading,
  Text,
  Flex,
  VStack,
  Image,
  AspectRatio,
  Accordion,
  AccordionItem,
  AccordionButton,
  Button,
  AccordionPanel,
  Select,
  AccordionIcon,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

// import Header from "../../Header/Header";
import { Checkbox } from "antd";

const GL = () => {
  return (
    <div>

      <Container
        maxW="container"
        marginLeft="15%"
        p="10"
        width=""
        rounded="lg"
        boxShadow="md"
        columns={{ sm: 2, md: 4 }}
        backgroundColor="red.100"
        // spacing='8'
        // textAlign='center'
        // backgroundColor='#F6F6F6'
      >
        <Flex
          h=""
          width="auto"
          rounded="md"
          boxShadow="md"
          backgroundColor="#F6F6F6"
        >
          <Box flex="1">
            <Center>
             
            </Center>
            <br />
            <HStack>
              <Box flex="1" padding="2%">
                <Accordion allowToggle>
                  <AccordionItem mt="2%">
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "#2347F0", color: "white" }}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="center"
                          fontWeight="bold"
                        >
                          MGA View Only Data
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <Flex>
                        <Box flex="1" bg="">
                          <Heading size="32" textColor="gray">
                            Policy Locked <Checkbox> </Checkbox>
                          </Heading>

                          <FormControl isRequired mt="2%">
                            <FormLabel textColor="gray">Policy No.</FormLabel>
                            <Input placeholder="QuoteEM911799" />
                          </FormControl>

                          <HStack mt="2%">
                            <FormControl isRequired>
                              <FormLabel textColor="gray">First Name</FormLabel>
                              <Input
                                placeholder="First name"
                                variant="outline"
                              />
                            </FormControl>

                            <FormControl isRequired>
                              <FormLabel textColor="gray">
                                Middle Name
                              </FormLabel>
                              <Input placeholder="Middle name" />
                            </FormControl>

                            <FormControl isRequired>
                              <FormLabel textColor="gray">Last Name</FormLabel>
                              <Input placeholder="Last name" />
                            </FormControl>
                          </HStack>

                          <HStack mt="2%">
                            <FormControl isRequired>
                              <FormLabel textColor="gray">
                                Busniess Name
                              </FormLabel>
                              <Input placeholder="Enter Busniess Name" />
                            </FormControl>

                            <FormControl isRequired>
                              <FormLabel textColor="gray">DBA Name</FormLabel>
                              <Input placeholder="Enter DBA Name" />
                            </FormControl>
                          </HStack>

                          <Text fontWeight="bold" mt="2%">
                            Line: GL Rate
                          </Text>
                        </Box>

                        <Box flex="1" bg="" ml="2%">
                          <Heading size="32" textColor="gray">
                            Status Quoto: 1/23/2023
                          </Heading>

                          <FormControl isRequired mt="2%">
                            <FormLabel textColor="gray">Term:</FormLabel>
                            <Input placeholder="1 Year" />
                          </FormControl>
                          <FormControl isRequired mt="2%">
                            <FormLabel textColor="gray">Effective:</FormLabel>
                            <Input placeholder="1/23/2023" />
                          </FormControl>
                          <FormControl isRequired mt="2%">
                            <FormLabel textColor="gray">Experation:</FormLabel>
                            <Input placeholder="1/23/24" />
                          </FormControl>

                          <Text fontWeight="bold" mt="2%">
                            STATE: ALABAMA
                          </Text>
                        </Box>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem mt="2%">
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "#2347F0", color: "white" }}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="center"
                          fontWeight="bold"
                        >
                          Agency Information
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Box    display={'flex'}   flexDir={'column'}     alignItems={'center'}  >
                        <Box>
                            Agency User 
                        </Box>
                      <Flex>
                     

                        <Box  bg="" ml="2%">
                          <FormControl mt="2%">
                            <FormLabel textColor="gray">
                              Each Occurance/General Aggregate
                            </FormLabel>
                            <Select placeholder="Select Amount">
                              <option>$100,000</option>
                              <option>$200,000</option>
                              <option>$300,000</option>
                            </Select>
                          </FormControl>
                        </Box>

                      </Flex>
                        <Button   mt={'20px'}   colorScheme='teal' >Login </Button>
                        </Box>
                
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem mt="2%">
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "#2347F0", color: "white" }}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="center"
                          fontWeight="bold"
                        >
                        Additional  Insureds
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Flex   justifyContent={'center'}        >
                        <Button  colorScheme='linkedin'    >Click Here to add Another Interest, etc</Button>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem mt="2%">
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "#2347F0", color: "white" }}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="center"
                          fontWeight="bold"
                        >
                        Canien 2
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <VStack        display={'flex'}    justifyContent={'center'}      alignContent={'center'}>
                        <HStack>
<Box>Dog </Box>
                      <Input       border={'1px solid red'}  placeholder='Name of Dog' size='lg' />

                       </HStack>
                        <HStack>
<Box>Sex  </Box>
                      <Input      border={'1px solid red'}   placeholder='Sex' size='lg' />

                       </HStack>
                        <HStack>
<Box>Weight  </Box>
                      <Input       border={'1px solid red'}  placeholder='Weight' size='lg' />

                       </HStack>
                        <HStack>
<Box>Location   </Box>
                      <Input      border={'1px solid red'}   placeholder='Location' size='lg' />

                       </HStack>
                        <HStack>
<Box>Use   </Box>
                      <Input       border={'1px solid red'}  placeholder='Use' size='lg' />

                       </HStack>
                        <VStack>
<Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo numquam hic </Box>
                      <Input      border={'1px solid red'}   placeholder='Enter Your Dog Breed ' size='lg' />

                      <Checkbox >Mixed Breed </Checkbox>


                       </VStack>

                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem mt="2%">
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "#2347F0", color: "white" }}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="center"
                          fontWeight="bold"
                        >
                          Canine 
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <VStack          justifyContent={'center'} >

                        <HStack>
                            <Box>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam reprehenderit at</Box>
                            <Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
                        </HStack>

                        <HStack>
                            <Box>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam reprehenderit at</Box>
                            <Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
                        </HStack>

                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem mt="2%">
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "#2347F0", color: "white" }}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="center"
                          fontWeight="bold"
                        >
                         Canine Eligeblity 
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Flex justifyContent={'space-between'}   > 

                        <Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora.?</Box>
                        <Input         border={'1px solid black'}   w={'20%'}     placeholder='Basic usage' />
                    </Flex>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem mt="2%">
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "#2347F0", color: "white" }}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="center"
                          fontWeight="bold"
                        >
                          Additional UnderWritting Questions 
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
            <VStack         >

<HStack>
<Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora.?</Box>
                        <Input    w={'20%'}    border={'1px solid black'}  placeholder='Basic usage' />
</HStack>
<HStack>
<Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora.?</Box>
                        <Input    w={'20%'}    border={'1px solid black'}     placeholder='Basic usage' />
</HStack>
<HStack>
<Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora.?</Box>
</HStack>

                
            </VStack>




                    </AccordionPanel>
                  </AccordionItem>

                </Accordion>
              </Box>
            </HStack>
          </Box>
        </Flex>
      </Container>
    </div>
  )
}

export default GL