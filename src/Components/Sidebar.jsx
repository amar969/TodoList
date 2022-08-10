import React from "react";
import { Text, Box, VStack, StackDivider  } from "@chakra-ui/react";
import {useNavigate, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { getProfile, logout } from "../Redux/action.js";

export const Sidebar = () => {

  let navigate = useNavigate()
  let dispatch = useDispatch()

  const logoutUser = () => {
    localStorage.removeItem("user");
    dispatch(logout())
    navigate("/")
  };

  console.log(getProfile)

  React.useEffect(() => {
    dispatch(getProfile())
  }, []);

  let profile = useSelector((state) => state.profile)
  console.log(profile.data)
 
  let sidebarItems = ["All", "Offical", "Personal", "Other"]

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <img style={{ borderRadius: "50%" }} src={profile.data == undefined ? "" : profile.data.avatar} />
          <Text sx={{ fontSize: "20px", fontWeight: "bold" }}>
            {profile.data == undefined ? "" : profile.data.first_name} {profile.data == undefined ? "" : profile.data.last_name}
          </Text>
        </Box>

        <Box>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
            p={10}
            sx={{ marginTop:"100px" }}
            
          >
            <Link to="/Summary/All">
            <Box sx={{ display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center" }} h="40px" bg="yellow" >
              All
            </Box>
            </Link>
            
            <Link to="/Summary/Offical">
            <Box onClick={(e) => console.log(e.target.textContent)}  sx={{ display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center" }} h="40px" bg="tomato">
              Offical
            </Box>
            </Link>

            <Link to="/Summary/Personal">
            <Box onClick={(e) => console.log(e.target.textContent)} sx={{ display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center" }} h="40px" bg="skyblue">
              Personal
            </Box>
            </Link>

            <Link to="/Summary/Other">
            <Box onClick={(e) => console.log(e.target.textContent)} sx={{ display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center" }} h="40px" bg="grey">
              Other
            </Box>
            </Link>
          </VStack>
        </Box>

        <Box>
          <button
            style={{
              backgroundColor: "teal",
              color: "white",
              fontWeight: "bold",
              border: "none",
              borderRadius: "20px",
              marginTop:"250px",
              width:"100px",
              fontSize:"18px"
            }}
            onClick={logoutUser}
          >
           Logout
            
          </button>
        </Box>
      </Box>
    </>
  );
};
