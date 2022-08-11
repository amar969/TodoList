import React from 'react'
import { Sidebar } from './Sidebar'
import {Box, Text} from "@chakra-ui/react"
import { CreateTodo } from './CreateTodo'

export const Home = () => {
    return(
        <>
       
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
                 <h1 style={{ textAlign: "left", marginLeft:"20px"}} >Create a task</h1>
        
               
               <CreateTodo /> 
            </Box>
        </Box>
        </>
    )
}