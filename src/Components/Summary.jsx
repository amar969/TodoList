import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdone, getInProgress, getTodo, getTodoData, getDoneData } from "../Redux/action";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";

export const Summary = () => {
  let dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTodoData())
    dispatch(getInProgress())
    dispatch(getDoneData())
  }, []);


  let todosData = useSelector((state) => state.todoData)
  console.log(todosData)

  let inProgressData = useSelector((state) => state.inProgressData)
  console.log(inProgressData)

  let doneData = useSelector((state) => state.doneData)
  console.log("Done data", doneData)


  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop:'20px',
        }}
      >
        <Box
          sx={{
            width: "30%",
            borderRight: "2px solid black",
            height: "800px",
          }}
        >
          <Sidebar />
        </Box>

        <Box
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginTop: "50px",
            marginLeft: "50px",
            
          }}
        >
            <Box sx={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap: "20px", width:"95%" }} >
            <Box sx={{  border: "2px solid black", borderTop:"none"}}>
            <Box sx={{ border: "3px solid black" , bgColor: "#54BAB9", color: "white", fontWeight:"bold", padding: "10px" }}>
              TODO
            </Box>
            <Box sx={{ overflow:'scroll', height:"600px" }} >
            {todosData.map((item) => {
              return (
                <>
                  <Box sx={{ border: "1px solid black", margin:"10px", padding: "20px", display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
                      <h3>{item.title}</h3>
                    <div style={{ display:"flex", justifyContent:"space-between", margin:"10px 0" }} >
                      <div style={{  padding:"3px 5px", borderRadius:"15px", fontSize: "13px", fontWeight:"bold", backgroundColor:"#99A799", color:"white" }} >{item.todo_tag}</div>
                      <div>{item.date}</div>
                    </div>
                    <p style={{ margin:'10px 0', textAlign:"left" }} >{item.description}</p>
                    <Box>
                    <input type="checkbox" value={item.subtask} />  {item.subtask}
                        
                        </Box>
                  </Box>
                </>
              );
            })}
            </Box>
          </Box>

          <Box sx={{  border: "2px solid black", borderTop:"none" }}>
            <Box sx={{ border: "3px solid black" , bgColor: "#F29191", color: "white", fontWeight:"bold", padding: "10px" }}>
              IN PROGRESS
            </Box>
            {inProgressData.map((item) => {
              return (
                <>
                  <Box sx={{ border: "1px solid black", margin:"10px", padding: "20px", display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
                      <h3>{item.title}</h3>
                    <div style={{ display:"flex", justifyContent:"space-between", margin:"10px 0" }} >
                    <div style={{  padding:"3px 5px", borderRadius:"15px", fontSize: "13px", fontWeight:"bold", backgroundColor:"#94D0CC", color:"white" }} >{item.todo_tag}</div>                      <div>{item.date}</div>
                    </div>
                    <p style={{ margin:'10px 0', textAlign:"left" }} >{item.description}</p>
                    <Box>
                    <input type="checkbox" value={item.subtask} />  {item.subtask}
                        
                        </Box>
                  </Box>
                </>
              );
            })}
          </Box>

          <Box sx={{  border: "2px solid black", borderTop:"none" }}>
            <Box sx={{ border: "3px solid black" , bgColor: "#726A95", color: "white", padding: "10px", fontWeight:"bold" }}>
              DONE
            </Box>
            {doneData.map((item) => {
              return (
                <>
                  <Box sx={{ border: "1px solid black", margin:"10px", padding: "20px", display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
                      <h3>{item.title}</h3>
                    <div style={{ display:"flex", justifyContent:"space-between", margin:"10px 0" }} >
                    <div style={{  padding:"3px 5px", borderRadius:"15px", fontSize: "13px", fontWeight:"bold", backgroundColor:"#709FB0", color:"white" }} >{item.todo_tag}</div>                      
                    <div>{item.date}</div>
                    </div>
                    <p style={{ margin:'10px 0', textAlign:"left" }} >{item.description}</p>
                    <Box>
                        <input type="checkbox" value={item.subtask} />  {item.subtask}
                        
                        </Box>
                  </Box>
                </>
              );
            })}
          </Box>
            </Box>
         
        </Box>
      </Box>
    </>
  );
};
