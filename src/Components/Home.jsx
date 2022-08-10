import React from 'react'
import { Sidebar } from './Sidebar'
import {Box, Text} from "@chakra-ui/react"
import { CreateTodo } from './CreateTodo'

export const Home = () => {
    return(
        <>
        <h1>Home</h1>
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <Box sx={{
                width:"30%",
                borderRight:"2px solid black",
                height:"800px"
                
            }} >
                <Sidebar />
            </Box>

            <Box sx={{ 
                width:"70%",

            }} >
               
               <CreateTodo /> 
            </Box>
        </Box>
        </>
    )
}