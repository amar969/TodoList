import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdone, getInProgress, getTodo } from "../Redux/action";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";

export const Summary = () => {
  let dispatch = useDispatch();

  let [todo, setTodo] = React.useState([]);
  let [inProgress, setInProgress] = React.useState([]);

  const getTodoData = async () => {
    let res = await fetch(
      "https://notes-json-server-44.herokuapp.com/notes?todo_status=Todo"
    );
    let data = await res.json();
    console.log(data);
    setTodo(data);
  };

  const getProgressData = async () => {
    let res = await fetch(
      "https://notes-json-server-44.herokuapp.com/notes?todo_status=In Progress"
    );
    let data = await res.json();
    console.log(data);
    setInProgress(data);
  };

  React.useEffect(() => {
    getTodoData();
    getProgressData();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
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
            <Box sx={{  border: "2px solid black", borderTop:"none" }}>
            <Box sx={{ border: "3px solid black" , bgColor: "#54BAB9", color: "white", fontWeight:"bold", padding: "10px" }}>
              TODO
            </Box>
            {todo.map((item) => {
              return (
                <>
                  <Box sx={{ border: "1px solid black", margin:"10px", padding: "20px", display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
                      <h3>{item.title}</h3>
                    <div style={{ display:"flex", justifyContent:"space-between", margin:"10px 0" }} >
                      <div style={{  padding:"3px 5px", borderRadius:"15px", fontSize: "13px", fontWeight:"bold", backgroundColor:"#99A799", color:"white" }} >{item.todo_cate}</div>
                      <div>{item.date}</div>
                    </div>
                    <p style={{ margin:'10px 0' }} >{item.description}</p>
                    <Box>
                        <input type="checkbox" name="" id="" /> Subtask - 1
                        
                        </Box>
                  </Box>
                </>
              );
            })}
          </Box>

          <Box sx={{  border: "2px solid black", borderTop:"none" }}>
            <Box sx={{ border: "3px solid black" , bgColor: "#F29191", color: "white", fontWeight:"bold", padding: "10px" }}>
              IN PROGRESS
            </Box>
            {inProgress.map((item) => {
              return (
                <>
                  <Box sx={{ border: "1px solid black", margin:"10px", padding: "20px", display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
                      <h3>{item.title}</h3>
                    <div style={{ display:"flex", justifyContent:"space-between", margin:"10px 0" }} >
                    <div style={{  padding:"3px 5px", borderRadius:"15px", fontSize: "13px", fontWeight:"bold", backgroundColor:"#94D0CC", color:"white" }} >{item.todo_cate}</div>                      <div>{item.date}</div>
                    </div>
                    <p style={{ margin:'10px 0' }} >{item.description}</p>
                    <Box>
                        <input type="checkbox" name="" id="" /> Subtask - 1
                        
                        </Box>
                  </Box>
                </>
              );
            })}
          </Box>

          <Box sx={{  border: "2px solid black", borderTop:"none" }}>
            <Box sx={{ border: "3px solid black" , bgColor: "#726A95", color: "white", padding: "10px", fontWeight:"bold" }}>
              TODO
            </Box>
            {todo.map((item) => {
              return (
                <>
                  <Box sx={{ border: "1px solid black", margin:"10px", padding: "20px", display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
                      <h3>{item.title}</h3>
                    <div style={{ display:"flex", justifyContent:"space-between", margin:"10px 0" }} >
                    <div style={{  padding:"3px 5px", borderRadius:"15px", fontSize: "13px", fontWeight:"bold", backgroundColor:"#709FB0", color:"white" }} >{item.todo_cate}</div>                      
                    <div>{item.date}</div>
                      <div>{item.date}</div>
                    </div>
                    <p style={{ margin:'10px 0' }} >{item.description}</p>
                    <Box>
                        <input type="checkbox" name="" id="" /> Subtask - 1
                        
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
